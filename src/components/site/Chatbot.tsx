"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { chatbot, company, type BotEntry } from "@/lib/content";
import { Icon } from "@/lib/icons";

type Action = { label: string; href: string };
type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
  actions?: Action[];
};

let idSeq = 1;
const nextId = () => idSeq++;

function matchEntry(input: string): BotEntry {
  const q = input.toLowerCase();
  let best: { entry: BotEntry; score: number } | null = null;
  for (const entry of chatbot.knowledge) {
    const score = entry.tags.reduce((acc, tag) => (q.includes(tag) ? acc + 1 : acc), 0);
    if (score > 0 && (!best || score > best.score)) best = { entry, score };
  }
  return best?.entry ?? chatbot.fallback;
}

export function Chatbot() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(true);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: nextId(), role: "bot", text: chatbot.greeting },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 350);
      return () => clearTimeout(t);
    }
  }, [open]);

  function toggle() {
    setOpen((v) => !v);
    setUnread(false);
  }

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function respondTo(text: string) {
    const entry = matchEntry(text);
    const delay = reduce ? 250 : 650;
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "bot", text: entry.answer, actions: entry.actions },
      ]);
      if (!open) setUnread(true);
    }, delay);
  }

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setMessages((prev) => [...prev, { id: nextId(), role: "user", text: trimmed }]);
    setDraft("");
    respondTo(trimmed);
  }

  return (
    <>
      {/* Launcher */}
      <motion.button
        type="button"
        onClick={toggle}
        aria-label={open ? "Close chat" : "Chat with us"}
        aria-expanded={open}
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 cursor-pointer place-items-center rounded-full text-white shadow-[0_14px_40px_-12px_rgba(52,162,75,0.7)] ring-1 ring-white/10 transition-shadow sm:bottom-7 sm:right-7"
        style={{
          background: "linear-gradient(120deg, var(--color-brand-bright), var(--color-brand-deep))",
        }}
      >
        {!open && unread && (
          <span className="absolute right-1 top-1 grid h-4 w-4 place-items-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-ink" />
          </span>
        )}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "chat"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? <Icon.close width={24} height={24} /> : <Icon.chat width={24} height={24} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Connexxion Energy chat assistant"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass fixed bottom-24 right-4 z-40 flex h-[min(32rem,calc(100dvh-7.5rem))] w-[calc(100vw-2rem)] max-w-[24rem] flex-col overflow-hidden rounded-3xl shadow-[0_30px_80px_-24px_rgba(0,0,0,0.8)] sm:bottom-28 sm:right-7"
          >
            {/* Header */}
            <div className="relative shrink-0 overflow-hidden border-b border-cream/10 px-5 py-4">
              <div className="pointer-events-none absolute -left-10 -top-16 h-40 w-40 glow-brand opacity-40" aria-hidden />
              <div className="relative flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand/15 text-brand-bright ring-1 ring-brand/30">
                  <Icon.spark width={20} height={20} />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-base leading-tight text-cream">Cira</p>
                  <p className="flex items-center gap-1.5 text-xs text-sage">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-bright" />
                    Connexxion Energy · Online
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-4 overflow-y-auto px-5 py-5"
            >
              {messages.map((m) => (
                <MessageBubble key={m.id} message={m} onClose={() => setOpen(false)} />
              ))}

              {typing && (
                <div className="flex items-end gap-2">
                  <BotAvatar />
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-cream/[0.06] px-4 py-3 ring-1 ring-cream/10">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-sage"
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quick replies — only before the user has spoken */}
              {messages.length === 1 && !typing && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {chatbot.quickReplies.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => send(q)}
                      className="cursor-pointer rounded-full border border-cream/15 bg-cream/[0.03] px-3.5 py-2 text-xs text-cream/90 transition-colors duration-200 hover:border-gold hover:text-gold-soft"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(draft);
              }}
              className="shrink-0 border-t border-cream/10 p-3"
            >
              <div className="flex items-center gap-2 rounded-full border border-cream/12 bg-cream/[0.03] py-1 pl-4 pr-1.5 transition-colors focus-within:border-brand">
                <label htmlFor="chat-input" className="sr-only">
                  Type your message
                </label>
                <input
                  id="chat-input"
                  ref={inputRef}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Type your message…"
                  autoComplete="off"
                  className="min-w-0 flex-1 bg-transparent py-2 text-sm text-cream placeholder:text-sage/60 outline-none"
                />
                <button
                  type="submit"
                  disabled={!draft.trim() || typing}
                  aria-label="Send message"
                  className="grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
                  style={{
                    background:
                      "linear-gradient(120deg, var(--color-brand-bright), var(--color-brand-deep))",
                  }}
                >
                  <Icon.send width={17} height={17} />
                </button>
              </div>
              <p className="mt-2 text-center text-[0.65rem] text-sage/60">
                Prefer a human? Call{" "}
                <a href={`tel:${company.phone}`} className="text-sage hover:text-gold-soft">
                  {company.phone}
                </a>
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function BotAvatar() {
  return (
    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand/15 text-brand-bright ring-1 ring-brand/30">
      <Icon.spark width={14} height={14} />
    </span>
  );
}

function MessageBubble({ message, onClose }: { message: Message; onClose: () => void }) {
  const isBot = message.role === "bot";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-end gap-2 ${isBot ? "" : "flex-row-reverse"}`}
    >
      {isBot ? (
        <BotAvatar />
      ) : (
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cream/10 text-cream/80 ring-1 ring-cream/15">
          <Icon.user width={14} height={14} />
        </span>
      )}
      <div className={`max-w-[80%] ${isBot ? "" : "text-right"}`}>
        <div
          className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
            isBot
              ? "rounded-bl-sm bg-cream/[0.06] text-cream/90 ring-1 ring-cream/10"
              : "rounded-br-sm bg-brand-deep/80 text-white ring-1 ring-brand/40"
          }`}
        >
          {message.text}
        </div>
        {isBot && message.actions && message.actions.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {message.actions.map((a) =>
              a.href.startsWith("/") ? (
                <Link
                  key={a.label}
                  href={a.href}
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gold/12 px-3 py-1.5 text-xs font-medium text-gold-soft ring-1 ring-gold/30 transition-colors hover:bg-gold/20"
                >
                  {a.label}
                  <Icon.arrow width={13} height={13} />
                </Link>
              ) : (
                <a
                  key={a.label}
                  href={a.href}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gold/12 px-3 py-1.5 text-xs font-medium text-gold-soft ring-1 ring-gold/30 transition-colors hover:bg-gold/20"
                >
                  {a.label}
                </a>
              )
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
