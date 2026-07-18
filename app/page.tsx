"use client";
import React, { useMemo, useState } from "react";
export default function Home() {
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

  const showWork = false;

  function updateField(
    key: "name" | "contact" | "city" | "details",
    value: string
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function removeFile(idx: number) {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  }

  function onPickFiles(list: FileList | null) {
    const picked = Array.from(list || []);
    if (!picked.length) return;

    const imagesOnly = picked.filter((f) => f.type.startsWith("image/"));

    const MAX_SIZE = 8 * 1024 * 1024; // 8MB
    const sizeOk = imagesOnly.filter((f) => f.size <= MAX_SIZE);

    setFiles((prev) => {
      const merged = [...prev, ...sizeOk];
      return merged.slice(0, 5);
    });
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

      const res = await fetch("/api/quote", { method: "POST", body: fd });
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

  const trustBadges = useMemo(
    () => [
      "Fast response",
      "Clean finish guarantee",
      "Clear quote + timeline",
      "Serving Vancouver & North Van",
    ],
    []
  );

  const processSteps = useMemo(
    () => [
      { title: "Share details", desc: "Tell us what you need + upload photos (optional)." },
      { title: "Clear quote", desc: "You get a clean estimate and timeline, no surprises." },
      { title: "Clean execution", desc: "Careful install, clean wiring, clean finishes." },
      { title: "Handover", desc: "Walkthrough + final checks. You’re covered." },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        q: "Do you offer free estimates?",
        a: "Yes. Send your details and photos (optional). We’ll reply with a clear estimate.",
      },
      { q: "How fast do you respond?", a: "Typically within a few hours (often same day)." },
      {
        q: "Which areas do you serve?",
        a: "Vancouver, North Vancouver, Burnaby, Richmond, Coquitlam (and nearby).",
      },
      {
        q: "Do you do both renovation and tech (smart home / cameras)?",
        a: "Yes. We focus on clean installs, clean routing, and premium finishing.",
      },
      { q: "Can I upload photos with my request?", a: "Yes. You can upload up to 5 photos." },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        {/* HERO */}
        <section className="relative pt-10 pb-16">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-3 text-center">
              <h2 className="text-xl font-bold leading-tight text-white md:text-3xl">
                Residential & Commercial
                <br />
                We handle it all from Renovations , Smart home and Security Solutions across Vancouver.
              </h2>
            </div>

            <div className="relative mx-auto overflow-hidden rounded-3xl border border-white/10 bg-black/40 w-full max-w-[1400px] h-[420px] sm:h-[520px] md:h-[460px]">
              <img
                src="/images/4 (1).jpg"
                alt="Nestora renovation and smart home services"
                className="h-full w-full object-cover bg-black"
              />

              {/* optional overlay فقط برای اینکه عکس شیک‌تر دیده بشه */}
              <div className="pointer-events-none absolute inset-0 bg-black/15" />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="rounded-2xl bg-white px-5 py-3 text-center text-sm font-medium text-black hover:bg-white/90"
                >
                  Request a quote
                </a>

                <a
                  href="#services"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10"
                >
                  View services
                </a>

                {showWork && (
                  <a
                    href="/work"
                    className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10"
                  >
                    View work
                  </a>
                )}

                <a
                  href="/about"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10"
                >
                  About Nestora
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/75">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              Vancouver • Premium Renovation & Tech
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Build spaces that feel
              <span className="text-white/70"> modern</span>,
              <span className="text-white/70"> clean</span>,
              <span className="text-white/70"> premium</span>.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              nestora delivers premium renovation, smart home integration, and security camera systems —
              clean wiring, clean finishes, and reliable execution.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10"
              >
                Request a quote
              </a>

              <a
                href="#services"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10"
              >
                View services
              </a>

              {showWork && (
                <a
                  href="/work"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10"
                >
                  View work
                </a>
              )}

              <a
                href="/about"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10"
              >
                About nestora
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {trustBadges.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/65"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 md:grid-cols-4">
              <Stat label="Response" value="< 2h" />
              <Stat label="Clean finish" value="Premium" />
              <Stat label="Warranty" value="Guaranteed" />
              <Stat label="Based in" value="Vancouver" />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-5 pb-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Services</h2>
              <p className="mt-2 text-sm text-white/70">
                Focused offerings. Clean execution. No mess.
              </p>
            </div>

            <a
              href="/contact"
              className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 md:inline-flex"
            >
              Ask availability
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card
              title="Renovation"
              desc="Kitchens, bathrooms, drywall/patching, painting, flooring, trim — premium finishing."
              bullets={["Clean lines", "Protection + dust control", "Modern finish"]}
            />
            <Card
              title="Smart Home"
              desc="Thermostats, locks, lighting, sensors — setup, wiring, and seamless automation."
              bullets={["Correct placement", "Neat wiring", "Walkthrough included"]}
            />
            <Card
              title="Security Cameras"
              desc="Outdoor/indoor camera systems, doorbells, NVR/Cloud setup — clean cable routing."
              bullets={["Coverage plan", "Hidden routing when possible", "Recording verified"]}
            />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/services/renovation"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm text-white hover:bg-white/10"
            >
              Renovation page →
            </a>
            <a
              href="/services/smart-home"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm text-white hover:bg-white/10"
            >
              Smart Home page →
            </a>
            <a
              href="/services/security-cameras"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm text-white hover:bg-white/10"
            >
              Security Cameras page →
            </a>
          </div>
        </section>

        {/* Process */}
        <section className="mx-auto max-w-6xl px-5 pb-16">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Process</h2>
          <p className="mt-2 text-sm text-white/70">
            Simple, clear, and professional from start to finish.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {processSteps.map((s, i) => (
              <div
                key={s.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <div className="inline-flex items-center gap-2 text-xs text-white/60">
                  <span className="rounded-full border border-white/10 bg-black/40 px-2 py-1">
                    Step {i + 1}
                  </span>
                </div>
                <div className="mt-4 text-sm font-semibold">{s.title}</div>
                <p className="mt-2 text-sm leading-6 text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-5 pb-16">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>
          <p className="mt-2 text-sm text-white/70">Quick answers to common questions.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-5 pb-20">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 md:p-10">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Get a quote</h2>
            <p className="mt-2 text-sm text-white/70">
              Send the details. We’ll reply fast with a clear estimate.
            </p>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="grid gap-4 md:grid-cols-3">
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
                  placeholder="What do you need done? Add notes, measurements, timeline, etc."
                  value={form.details}
                  onChange={(e) => updateField("details", e.target.value)}
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs text-white/70">Photos (optional)</label>
                  <span className="text-[11px] text-white/40">{files.length}/5</span>
                </div>

                <div className="mt-2 rounded-2xl border border-white/10 bg-black/40 p-3">
                  <input
                    id="photoUpload"
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => onPickFiles(e.target.files)}
                  />

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <label
                      htmlFor="photoUpload"
                      className="inline-flex cursor-pointer items-center justify-center rounded-2xl bg-white px-4 py-2 text-xs font-medium text-black hover:bg-white/90"
                    >
                      Upload photos
                    </label>

                    <p className="text-xs text-white/50">Up to 5 photos (max 8MB each).</p>
                  </div>

                  {files.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {files.map((f, i) => (
                        <li
                          key={`${f.name}-${i}`}
                          className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                        >
                          <span className="truncate text-xs text-white/70">{f.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(i)}
                            className="text-xs text-white/50 hover:text-white"
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-white/50">
                    By submitting, you agree to be contacted about your request.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black
                               transition-colors hover:bg-white/80 active:bg-white/70
                               disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send request"}
                  </button>
                </div>

                {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
                {sent && !error && (
                  <p className="mt-3 text-sm text-green-400">Sent successfully. We’ll contact you soon.</p>
                )}
              </div>
            </form>
          </div>
        </section>

        {/* Footer اینجا حذف شد چون باید تو SiteFooter باشه */}
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
      <div className="text-sm font-semibold">{value}</div>
      <div className="mt-1 text-xs text-white/60">{label}</div>
    </div>
  );
}

function Card({ title, desc, bullets }: { title: string; desc: string; bullets: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <div className="text-sm font-semibold">{title}</div>
      <p className="mt-3 text-sm leading-6 text-white/70">{desc}</p>

      <ul className="mt-4 space-y-2 text-xs text-white/65">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[6px] h-1 w-1 rounded-full bg-white/40" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 h-px w-full bg-white/10" />
      <p className="mt-4 text-xs text-white/50">nestora standard • clean finish</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <div className="text-sm font-semibold">{q}</div>
      <p className="mt-3 text-sm leading-6 text-white/70">{a}</p>
    </div>
  );
}

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