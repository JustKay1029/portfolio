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
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 600);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for subtle shard interaction
    let mouse = { x: width / 2, y: height / 2, active: false };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const handleMouseLeave = () => {
      mouse.active = false;
    };
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Generate sleek monochromatic polygonal shard particles
    const shardCount = 26;
    const shards = Array.from({ length: shardCount }, (_, i) => {
      const size = Math.random() * 70 + 35;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        points: [
          { x: 0, y: -size * 0.6 },
          { x: size * 0.5, y: size * 0.2 },
          { x: size * 0.2, y: size * 0.6 },
          { x: -size * 0.5, y: size * 0.4 },
        ],
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        angle: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.003,
        alpha: Math.random() * 0.12 + 0.04,
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle ambient silver-white radial center light
      const radialGlow = ctx.createRadialGradient(
        width / 2,
        height * 0.35,
        20,
        width / 2,
        height * 0.35,
        width * 0.55
      );
      radialGlow.addColorStop(0, 'rgba(255, 255, 255, 0.06)');
      radialGlow.addColorStop(0.5, 'rgba(255, 255, 255, 0.02)');
      radialGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Render floating sleek monochrome shards
      shards.forEach((shard) => {
        shard.x += shard.vx;
        shard.y += shard.vy;
        shard.angle += shard.vRot;

        // Wrap around boundaries
        if (shard.x < -shard.size) shard.x = width + shard.size;
        if (shard.x > width + shard.size) shard.x = -shard.size;
        if (shard.y < -shard.size) shard.y = height + shard.size;
        if (shard.y > height + shard.size) shard.y = -shard.size;

        // Subtle reaction to mouse
        if (mouse.active) {
          const dx = mouse.x - shard.x;
          const dy = mouse.y - shard.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            const force = (160 - dist) / 160;
            shard.x -= (dx / dist) * force * 1.2;
            shard.y -= (dy / dist) * force * 1.2;
          }
        }

        ctx.save();
        ctx.translate(shard.x, shard.y);
        ctx.rotate(shard.angle);

        // Path of the polygonal shard
        ctx.beginPath();
        shard.points.forEach((pt, pIdx) => {
          if (pIdx === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.closePath();

        // Sleek frosted translucent monochrome gradient
        const shardGrad = ctx.createLinearGradient(
          -shard.size / 2,
          -shard.size / 2,
          shard.size / 2,
          shard.size / 2
        );
        shardGrad.addColorStop(0, `rgba(255, 255, 255, ${shard.alpha})`);
        shardGrad.addColorStop(1, `rgba(160, 160, 175, ${shard.alpha * 0.3})`);

        ctx.fillStyle = shardGrad;
        ctx.fill();

        // Hairline silver edge stroke
        ctx.strokeStyle = `rgba(255, 255, 255, ${shard.alpha * 1.4})`;
        ctx.lineWidth = 0.75;
        ctx.stroke();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-auto w-full h-full ${className}`}
    />
  );
}
