"use client";

import React, { useState } from "react";

function Input({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-xs text-white/70">{label}</label>
      <input
        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-white/20"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    city: "",
    details: "",
  });

  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function updateField(
    key: "name" | "contact" | "city" | "details",
    value: string
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e?: React.FormEvent) {
    if (e) e.preventDefault();

    setError(null);
    setSent(false);

    if (
      !form.name.trim() ||
      !form.contact.trim() ||
      !form.city.trim() ||
      !form.details.trim()
    ) {
      setError("Please fill all fields (name, contact, city, details).");
      return;
    }

    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("contact", form.contact);
      fd.append("city", form.city);
      fd.append("details", form.details);

      files.slice(0, 5).forEach((f) => fd.append("files", f));

      const res = await fetch("/api/quote", {
        method: "POST",
        body: fd,
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data?.error || "Sending failed. Try again.");
        return;
      }

      setSent(true);
      setForm({ name: "", contact: "", city: "", details: "" });
      setFiles([]);

      setTimeout(() => setSent(false), 4000);
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="pt-10">
      <div className="mx-auto max-w-6xl px-5 pb-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 md:p-10">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Get a quote
          </h1>
          <p className="mt-2 text-sm text-white/70">
            Send the details. I’ll reply fast with a clear estimate.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Input
                label="Name"
                placeholder="Your name"
                value={form.name}
                onChange={(v) => updateField("name", v)}
              />
              <Input
                label="Phone / Email"
                placeholder="Best contact"
                value={form.contact}
                onChange={(v) => updateField("contact", v)}
              />
              <Input
                label="City"
                placeholder="Vancouver / North Van"
                value={form.city}
                onChange={(v) => updateField("city", v)}
              />
            </div>

            <div className="mt-4">
              <label className="text-xs text-white/70">Project details</label>
              <textarea
                className="mt-2 h-28 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-white/20"
                placeholder="What do you need done? Add details, links, or notes."
                value={form.details}
                onChange={(e) => updateField("details", e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label className="text-xs text-white/70">Photos (optional)</label>
              <input
                type="file"
                multiple
                accept="image/*"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 file:mr-4 file:rounded-xl file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-sm file:text-white hover:file:bg-white/15"
                onChange={(e) => setFiles(Array.from(e.target.files || []))}
              />
              <p className="mt-2 text-xs text-white/50">
                You can upload up to 5 photos.
              </p>
            </div>

            <div className="mt-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-white/50">
                  By submitting, you agree to be contacted about your request.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white
                             transition-colors hover:bg-white/10 active:bg-white/15
                             disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send request"}
                </button>
              </div>

              {error ? (
                <p className="mt-3 text-sm text-red-400">{error}</p>
              ) : null}

              {sent && !error ? (
                <p className="mt-3 text-sm text-green-400">
                  Sent successfully. We’ll contact you soon.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
