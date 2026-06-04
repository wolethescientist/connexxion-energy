"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Icon } from "@/lib/icons";
import { openings } from "@/lib/content";

type Status = "idle" | "submitting" | "success";

const field =
  "w-full rounded-xl border border-cream/12 bg-cream/[0.03] px-4 py-3.5 text-cream placeholder:text-sage/60 outline-none transition-colors duration-200 focus:border-brand focus:bg-cream/[0.05]";

export function CareersForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    // Front-end demo: simulate a send. Wire to an ATS / email service to go live.
    setTimeout(() => setStatus("success"), 1100);
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="card-dark flex h-full min-h-[26rem] flex-col items-center justify-center rounded-2xl p-10 text-center"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand/15 text-brand-bright ring-1 ring-brand/30">
          <Icon.check width={28} height={28} />
        </span>
        <h3 className="mt-6 font-display text-2xl text-cream">Application received</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-sage">
          Thank you for your interest in joining Connexxion Energy. Our talent team will review your
          application and be in touch if there&rsquo;s a strong match.
        </p>
        <button onClick={() => setStatus("idle")} className="mt-7 btn btn-ghost !py-2.5 text-sm">
          Submit another application
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-dark rounded-2xl p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="c-name" className="mb-2 block text-sm font-medium text-cream/85">
            Full name
          </label>
          <input id="c-name" name="name" required placeholder="Jane Doe" className={field} />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="c-email" className="mb-2 block text-sm font-medium text-cream/85">
            Email
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={field}
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="c-phone" className="mb-2 block text-sm font-medium text-cream/85">
            Phone <span className="text-sage/60">(optional)</span>
          </label>
          <input id="c-phone" name="phone" type="tel" placeholder="+234 …" className={field} />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="c-role" className="mb-2 block text-sm font-medium text-cream/85">
            Role of interest
          </label>
          <div className="relative">
            <select
              id="c-role"
              name="role"
              required
              defaultValue=""
              className={`${field} appearance-none pr-10`}
            >
              <option value="" disabled>
                Select a role…
              </option>
              {openings.map((o) => (
                <option key={o.id} value={o.title} className="bg-panel text-cream">
                  {o.title}
                </option>
              ))}
              <option value="Open application" className="bg-panel text-cream">
                Open application
              </option>
            </select>
            <Icon.arrowDown
              width={16}
              height={16}
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-sage"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-cv" className="mb-2 block text-sm font-medium text-cream/85">
            Link to CV / portfolio
          </label>
          <input
            id="c-cv"
            name="cv"
            type="url"
            placeholder="https://… (LinkedIn, Drive, personal site)"
            className={field}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-message" className="mb-2 block text-sm font-medium text-cream/85">
            Why Connexxion Energy?
          </label>
          <textarea
            id="c-message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your experience and what draws you to this role…"
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
            Submitting…
          </>
        ) : (
          <>
            Submit application
            <Icon.arrow width={17} height={17} />
          </>
        )}
      </button>
      <p className="mt-4 text-center text-xs text-sage/70">
        By applying you consent to Connexxion Energy processing your details for recruitment.
      </p>
    </form>
  );
}
