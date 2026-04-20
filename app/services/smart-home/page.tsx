export default function SmartHomePage() {
  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            BRX • Smart Home
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-5xl">
            Smart Home Solutions
          </h1>

          <p className="mt-4 text-base leading-7 text-white/70 md:text-lg">
          </p>
        </div>

        {/* Block 1 */}
        <div className="mt-14 grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold md:text-2xl">
              Everyday comfort, made simple
              
            </h2>
            <p className="text-sm leading-7 text-white/75 md:text-base">
           Imagine sitting in your home and controlling the lights, temperature,
  security, and even your smart curtains with just a simple touch on your phone.
  You no longer have to worry about whether something was left on or whether
  your home is secure, because everything is right in front of you.
  Smart curtains can automatically adjust throughout the day, giving you
  better comfort, privacy, and energy efficiency.
            </p>

          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img
              src="/images/smart-home/smart.jpg"
              alt="Smart home lighting and control"
              className="h-[220px] w-full object-cover md:h-[260px]"
            />
          </div>
        </div>

        {/* Block 2 */}
        <div className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img
              src="/images/smart-home/smart2.jpg"
              alt="Smart thermostat and home automation"
              className="h-[220px] w-full object-cover md:h-[400px]"
            />
          </div>

          <div className="mt-6 max-w-3xl space-y-4">
            <h2 className="text-xl font-semibold md:text-2xl">
              Better control, inside and outside the home
            </h2>
            <p className="text-sm leading-7 text-white/75 md:text-base">
              Smart home systems are designed to make everyday life easier. From
              smart thermostats and lighting to digital locks and security sensors,
              every part of the system can work together in a simple and practical
              way that fits your lifestyle.
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="mt-14 grid items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img
              src="/images/smart-home/smart3.jpg"
              alt="Smart security and connected home devices"
              className="h-[220px] w-full object-cover md:h-[260px]"
            />
          </div>

          <div className="order-1 md:order-2 space-y-4">
            <h2 className="text-xl font-semibold md:text-2xl">
              Clean installation and reliable performance
            </h2>
            <p className="text-sm leading-7 text-white/75 md:text-base">
              At BRX, we focus on clean installation, proper setup, and systems
              that are easy to use. Our goal is to create smart home solutions
              that feel practical, dependable, and ready to grow with your needs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}