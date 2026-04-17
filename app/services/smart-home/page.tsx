export default function SmartHomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          Services • Smart Home
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
          Smart Home Integration
        </h1>

        <p className="mt-4 max-w-2xl text-white/70 leading-7">
          Thermostats, smart locks, lighting, sensors — setup, wiring, and seamless automation.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">Consult</div>
            <p className="mt-2 text-sm text-white/70">
              We match devices to your home and goals.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">Install</div>
            <p className="mt-2 text-sm text-white/70">
              Clean wiring, correct placement, reliable setup.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">Automate</div>
            <p className="mt-2 text-sm text-white/70">
              Scenes, routines, and a full walkthrough.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/contact"
            className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90"
          >
            Request a quote
          </a>
        </div>
      </section>
    </main>
  );
}
