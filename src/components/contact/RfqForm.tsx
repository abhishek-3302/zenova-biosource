"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, site } from "@/lib/site";
import { cn } from "@/lib/utils";

type EnquiryType = "RFQ" | "Service" | "Dealer" | "Distributor";

const enquiryTypes: EnquiryType[] = ["RFQ", "Service", "Dealer", "Distributor"];

const inputCls =
  "h-12 w-full rounded-xl border border-line bg-base/60 px-4 text-sm text-ink placeholder:text-mut focus:border-teal/50 focus:outline-none focus:ring-2 focus:ring-teal/20 transition-colors";
const labelCls = "mb-2 block text-sm font-medium text-body";

export function RfqForm() {
  const [type, setType] = useState<EnquiryType>("RFQ");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `${type} Enquiry${data.get("name") ? ` — ${data.get("name")}` : ""}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name") ?? ""}`,
        `Organization: ${data.get("org") ?? ""}`,
        `Email: ${data.get("email") ?? ""}`,
        `Phone: ${data.get("phone") ?? ""}`,
        `Category: ${data.get("category") ?? ""}`,
        `Enquiry type: ${type}`,
        "",
        `${data.get("message") ?? ""}`,
      ].join("\n"),
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div id="rfq" className="scroll-mt-28">
      {submitted ? (
        <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-teal/30 bg-teal/5 p-10 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal/15 text-teal-bright">
            <CheckCircle2 className="h-8 w-8" />
          </span>
          <h3 className="font-display mt-6 text-2xl font-semibold text-ink">
            Enquiry received
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-body">
            Thank you for reaching out. Our technical team will review your
            requirements and respond within 24 business hours.
          </p>
          <div className="mt-6">
            <Button onClick={() => setSubmitted(false)} variant="secondary">
              Submit another enquiry
            </Button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-line bg-panel/50 p-7 md:p-10"
        >
          <div className="mb-6 flex flex-wrap gap-2">
            {enquiryTypes.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                aria-pressed={type === t}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  type === t
                    ? "border-teal/50 bg-teal/15 text-teal-bright"
                    : "border-line bg-base/40 text-body hover:border-teal/30 hover:text-ink",
                )}
              >
                {t === "RFQ" ? "Request a Quote" : `${t} Enquiry`}
              </button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelCls}>
                Full Name
              </label>
              <input id="name" name="name" required className={inputCls} placeholder="Dr. Jane Doe" />
            </div>
            <div>
              <label htmlFor="org" className={labelCls}>
                Organization
              </label>
              <input id="org" name="org" required className={inputCls} placeholder="Hospital / Lab / Institute" />
            </div>
            <div>
              <label htmlFor="email" className={labelCls}>
                Work Email
              </label>
              <input id="email" name="email" type="email" required className={inputCls} placeholder="you@organization.com" />
            </div>
            <div>
              <label htmlFor="phone" className={labelCls}>
                Phone
              </label>
              <input id="phone" name="phone" type="tel" className={inputCls} placeholder="+91 …" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="category" className={labelCls}>
                Category of Interest
              </label>
              <select id="category" name="category" className={inputCls} defaultValue="">
                <option value="" disabled>
                  Select a category…
                </option>
                {categories.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
                <option value="multiple">Multiple / Full laboratory setup</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelCls}>
                {type === "RFQ"
                  ? "Equipment / quantity / specifications"
                  : type === "Service"
                    ? "Instrument model & service requirement"
                    : type === "Dealer"
                      ? "Your territory & product interest"
                      : "Region, coverage & product lines"}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-xl border border-line bg-base/60 px-4 py-3 text-sm text-ink placeholder:text-mut focus:border-teal/50 focus:outline-none focus:ring-2 focus:ring-teal/20"
                placeholder="Tell us what you need…"
              />
            </div>
          </div>

          <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs leading-relaxed text-mut">
              Prefer email? Reach us directly at{" "}
              <a href={`mailto:${site.email}`} className="text-teal-bright hover:underline">
                {site.email}
              </a>
            </p>
            <Button type="submit" size="lg">
              <Send className="h-4.5 w-4.5" />
              Submit {type === "RFQ" ? "Quote Request" : "Enquiry"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
