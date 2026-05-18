"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check, ChevronRight } from "lucide-react";

export function ContactForm() {
  const params = useSearchParams();
  const initialProduct = params.get("product") ?? "";
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-crimson flex items-center justify-center mx-auto">
          <Check className="text-white" size={26} />
        </div>
        <h3 className="mt-6 text-[24px] font-bold text-ink">Enquiry Received</h3>
        <p className="mt-3 text-ink-soft max-w-md mx-auto">
          Thank you for reaching out. Our sales team will respond within one
          business day. For faster response, message us on WhatsApp.
        </p>
        <p className="mt-6 text-[11px] text-ink-faint uppercase tracking-wider">
          Prototype — form is not yet wired to a backend.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" required />
        <Field label="Company" name="company" required />
        <Field label="Work Email" name="email" type="email" required />
        <Field label="Phone / WhatsApp" name="phone" />
      </div>
      <Field label="Product / Standard of Interest" name="product" defaultValue={initialProduct} />
      <FieldArea label="Specifications, Quantity, Delivery Port" name="message" required rows={5} />

      <div className="flex items-center gap-2 pt-1">
        <input
          type="checkbox"
          id="urgent"
          name="urgent"
          className="w-4 h-4 accent-crimson"
        />
        <label htmlFor="urgent" className="text-[13.5px] text-ink-soft">
          This is urgent — please reply on WhatsApp first.
        </label>
      </div>

      <button type="submit" className="btn-pill">
        Send Enquiry <ChevronRight size={16} />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[12px] font-medium text-ink-soft mb-1.5">
        {label} {required && <span className="text-crimson">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        defaultValue={defaultValue}
        className="field"
      />
    </label>
  );
}

function FieldArea({
  label,
  name,
  required,
  rows = 4,
}: {
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="block text-[12px] font-medium text-ink-soft mb-1.5">
        {label} {required && <span className="text-crimson">*</span>}
      </span>
      <textarea name={name} required={required} rows={rows} className="field resize-none" />
    </label>
  );
}
