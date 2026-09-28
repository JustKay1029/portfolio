import React, { useState, useId } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Send, Sparkles, Check, MessageSquarePlus } from 'lucide-react';
import {
  MorphingPopover,
  MorphingPopoverTrigger,
  MorphingPopoverContent,
} from './core/morphing-popover';
import emailjs from '@emailjs/browser';

export function NotePopover() {
  const uniqueId = useId();
  const [note, setNote] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  const closeMenu = () => {
    setNote('');
    setSenderEmail('');
    setStatus('idle');
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!note.trim()) return;

    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            message: note,
            reply_to: senderEmail || 'Anonymous Visitor',
            to_name: 'Kavya Gupta',
          },
          publicKey
        );
        setStatus('sent');
        setTimeout(closeMenu, 2000);
      } catch (err) {
        console.error('EmailJS error:', err);
        fallbackToMailto();
      }
    } else {
      fallbackToMailto();
    }
  };

  const fallbackToMailto = () => {
    const subject = encodeURIComponent('Quick Note from Portfolio Visitor');
    const body = encodeURIComponent(
      `Hi Kavya,\n\n${note}\n\nFrom: ${senderEmail || 'Portfolio Visitor'}`
    );
    window.location.href = `mailto:kavyagupta505@gmail.com?subject=${subject}&body=${body}`;
    setStatus('sent');
    setTimeout(closeMenu, 2500);
  };

  return (
    <MorphingPopover open={isOpen} onOpenChange={setIsOpen}>
      <MorphingPopoverTrigger
        className="flex h-10 items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-3 text-xs sm:text-sm font-medium text-[var(--text-main)] shadow-sm hover:border-[#3a31d8]/50 hover:text-[#3a31d8] transition-colors"
        title="Leave a quick note"
      >
        <MessageSquarePlus className="w-4 h-4 text-[#3a31d8]" />
        <motion.span layoutId={`popover-label-${uniqueId}`}>
          Leave a Note
        </motion.span>
      </MorphingPopoverTrigger>

      <MorphingPopoverContent className="w-[320px] sm:w-[380px]">
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#3a31d8]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Connect with Kavya</span>
            </div>
            <button
              type="button"
              onClick={closeMenu}
              className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors"
              aria-label="Close"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          {status === 'sent' ? (
            <div className="py-8 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-[var(--text-main)]">Note Sent!</p>
              <p className="text-xs text-[var(--text-muted)]">
                Thanks for reaching out! Closing window...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-3 space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email (optional)"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] px-3 py-2 text-xs text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#3a31d8]"
                />
              </div>

              <div>
                <textarea
                  rows={3}
                  required
                  placeholder="Write your note, feedback, or hello..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full resize-none rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] px-3 py-2 text-xs sm:text-sm text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#3a31d8]"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] text-[var(--text-muted)] font-mono">
                  Direct to inbox
                </span>
                <button
                  type="submit"
                  disabled={status === 'sending' || !note.trim()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#3a31d8] hover:bg-[#0600c2] text-[#ebe9fc] shadow-sm transition-all disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{status === 'sending' ? 'Sending...' : 'Send Note'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </MorphingPopoverContent>
    </MorphingPopover>
  );
}
