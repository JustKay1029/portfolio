import React, { useEffect, useRef } from 'react';

export function AeroShards({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 700);

    // Track theme dynamically
    let isDark = document.documentElement.classList.contains('dark');
    const observer = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains('dark');
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for orbital plane tilt & parallax
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Orbital configuration
    const shardCount = 30;
    const shards = Array.from({ length: shardCount }, (_, i) => {
      const radiusX = Math.random() * (width * 0.42 - 130) + 130;
      const eccentricity = 0.38 + Math.random() * 0.12; // elliptical flattening for 3D tilt
      const radiusY = radiusX * eccentricity;
      const baseSize = Math.random() * 32 + 18;

      // Unique polygonal facet for each crystal
      const numPoints = Math.floor(Math.random() * 3) + 4; // 4 to 6 vertices
      const points = [];
      for (let p = 0; p < numPoints; p++) {
        const ang = (p / numPoints) * Math.PI * 2;
        const rad = baseSize * (0.6 + Math.random() * 0.5);
        points.push({ x: Math.cos(ang) * rad, y: Math.sin(ang) * rad });
      }

      return {
        radiusX,
        radiusY,
        theta: (i / shardCount) * Math.PI * 2 + Math.random() * 0.4,
        speed: (Math.random() * 0.003 + 0.0025) * (i % 2 === 0 ? 1 : 1.15),
        tiltAngle: (Math.random() - 0.5) * 0.35, // slight orbital inclination variance
        selfAngle: Math.random() * Math.PI * 2,
        selfRotSpeed: (Math.random() - 0.5) * 0.012,
        baseSize,
        points,
        baseAlpha: Math.random() * 0.14 + 0.08,
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp for orbital tilt
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const centerX = width / 2;
      const centerY = height * 0.44;

      // Parallax offsets based on cursor
      const mouseOffsetFactorX = (mouse.x - centerX) / (width / 2);
      const mouseOffsetFactorY = (mouse.y - centerY) / (height / 2);

      // Ambient subtle center glow
      const radialGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        30,
        centerX,
        centerY,
        width * 0.5
      );
      if (isDark) {
        radialGlow.addColorStop(0, 'rgba(255, 255, 255, 0.045)');
        radialGlow.addColorStop(0.6, 'rgba(255, 255, 255, 0.01)');
        radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        radialGlow.addColorStop(0, 'rgba(0, 0, 0, 0.035)');
        radialGlow.addColorStop(0.6, 'rgba(0, 0, 0, 0.008)');
        radialGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Calculate 3D orbital positions for each shard
      const computedShards = shards.map((shard) => {
        shard.theta += shard.speed;
        shard.selfAngle += shard.selfRotSpeed;

        // Position on inclined ellipse
        const cosT = Math.cos(shard.theta);
        const sinT = Math.sin(shard.theta);

        // Tilt with mouse parallax
        const combinedTilt = shard.tiltAngle + mouseOffsetFactorX * 0.12;
        const rx = shard.radiusX * (1 + mouseOffsetFactorY * 0.08);
        const ry = shard.radiusY * (1 - mouseOffsetFactorY * 0.08);

        // Orbital projection
        const localX = cosT * rx;
        const localY = sinT * ry;

        // Apply orbital rotation/tilt
        const rotX = localX * Math.cos(combinedTilt) - localY * Math.sin(combinedTilt);
        const rotY = localX * Math.sin(combinedTilt) + localY * Math.cos(combinedTilt);

        const x = centerX + rotX;
        const y = centerY + rotY;

        // Pseudo-3D depth factor: sinT indicates whether the shard is in front (>0) or behind (<0)
        // Depth ranges roughly from 0.7 (deep back) to 1.35 (close foreground)
        const depth = 1 + sinT * 0.35;
        const alpha = Math.max(0.04, Math.min(0.35, shard.baseAlpha * (0.8 + sinT * 0.4)));

        return {
          shard,
          x,
          y,
          depth,
          alpha,
          sinT,
        };
      });

      // Sort by depth (draw background shards first, foreground shards last)
      computedShards.sort((a, b) => a.sinT - b.sinT);

      // Render each orbital crystal shard
      computedShards.forEach(({ shard, x, y, depth, alpha }) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(depth, depth);
        ctx.rotate(shard.selfAngle);

        // Path of crystal polygon
        ctx.beginPath();
        shard.points.forEach((pt, pIdx) => {
          if (pIdx === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.closePath();

        // Faceted crystal gradient depending on theme
        const grad = ctx.createLinearGradient(
          -shard.baseSize,
          -shard.baseSize,
          shard.baseSize,
          shard.baseSize
        );

        if (isDark) {
          // Dark Mode: Luminous silver and frosted crystal
          grad.addColorStop(0, `rgba(255, 255, 255, ${alpha * 1.1})`);
          grad.addColorStop(0.5, `rgba(180, 185, 200, ${alpha * 0.45})`);
          grad.addColorStop(1, `rgba(120, 125, 140, ${alpha * 0.15})`);
          ctx.fillStyle = grad;
          ctx.fill();

          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 1.8})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        } else {
          // Light Mode: Translucent smoky charcoal, graphite, and slate crystal
          grad.addColorStop(0, `rgba(20, 20, 25, ${alpha * 1.3})`);
          grad.addColorStop(0.5, `rgba(50, 50, 60, ${alpha * 0.7})`);
          grad.addColorStop(1, `rgba(100, 100, 110, ${alpha * 0.25})`);
          ctx.fillStyle = grad;
          ctx.fill();

          ctx.strokeStyle = `rgba(20, 20, 25, ${alpha * 2.2})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full ${className}`}
    />
  );
}
