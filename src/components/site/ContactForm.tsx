"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Icon } from "@/lib/icons";

type Status = "idle" | "submitting" | "success";

const field =
  "w-full rounded-xl border border-cream/12 bg-cream/[0.03] px-4 py-3.5 text-cream placeholder:text-sage/60 outline-none transition-colors duration-200 focus:border-brand focus:bg-cream/[0.05]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Enquiry from ${name}${company ? ` - ${company}` : ""}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}${company ? `\nCompany: ${company}` : ""}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:info@connexxionenergy.com?subject=${subject}&body=${body}`;
    setStatus("success");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="card-dark flex h-full min-h-[24rem] flex-col items-center justify-center rounded-2xl p-10 text-center"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand/15 text-brand-bright ring-1 ring-brand/30">
          <Icon.check width={28} height={28} />
        </span>
        <h3 className="mt-6 font-display text-2xl text-cream">Message received</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-sage">
          Thank you for reaching out to Connexxion Energy. A member of our team will respond to your
          enquiry shortly.
        </p>
        <button onClick={() => setStatus("idle")} className="mt-7 btn btn-ghost !py-2.5 text-sm">
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-dark rounded-2xl p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-cream/85">
            Full name
          </label>
          <input id="name" name="name" required placeholder="Jane Doe" className={field} />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-cream/85">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={field}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-cream/85">
            Company <span className="text-sage/60">(optional)</span>
          </label>
          <input id="company" name="company" placeholder="Company name" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-cream/85">
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project or enquiry…"
            className={`${field} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary mt-7 w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Sending…
          </>
        ) : (
          <>
            Send message
            <Icon.arrow width={17} height={17} />
          </>
        )}
      </button>
    </form>
  );
}
