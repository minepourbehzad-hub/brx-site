import Link from "next/link";

export default function SecurityCamerasPage() {
  return (
    <main className="pt-10">
      <div className="mx-auto max-w-6xl px-5 pb-20">
        {/* Top label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          Nestora • Security Cameras
        </div>

        {/* Title */}
        <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-5xl">
          Security Camera Solutions
        </h1>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
          Smart camera systems for homes and commercial spaces, with clean installation,
          reliable coverage, and simple day-to-day control.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-2xl bg-white px-5 py-3 text-center text-sm font-medium text-black hover:bg-white/90"
          >
            Request a quote
          </Link>

          <Link
            href="/services"
            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10"
          >
            Back to services
          </Link>
        </div>

        {/* Intro / Different from renovation */}
        <section className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold text-white">Residential</div>
            <p className="mt-3 text-sm leading-7 text-white/70">
              For homes, security cameras help protect entry points, driveways,
              backyards, garages, and shared access areas. The goal is simple:
              better visibility, more peace of mind, and easy monitoring from your phone.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold text-white">Commercial</div>
            <p className="mt-3 text-sm leading-7 text-white/70">
              For commercial spaces, camera systems can help monitor entrances,
              customer areas, storage rooms, hallways, parking zones, and exterior access.
              A proper setup improves both safety and day-to-day oversight.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold text-white">Alarm Systems</div>

<p className="mt-3 text-sm leading-7 text-white/70">
  Smart alarm systems detect motion, door and window activity, and send instant alerts to your phone. They provide fast response and reliable protection for homes and commercial properties.
</p>
          </div>
        </section>

        {/* Block 1 - text on top, image below */}
        <section className="mt-16">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-white">Bullet Cameras</div>
            <p className="mt-3 text-sm leading-7 text-white/70 md:text-base">
              Bullet cameras are a strong option for outdoor coverage. They are often used for
              walls, side entries, driveways, building perimeters, and areas where clear directional
              visibility matters. They are practical, visible, and often ideal when you want the
              camera angle to focus on one specific zone.
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
            <img
              src="/images/cameras/cam1.jpg"
              alt="Bullet security camera installation"
              className="h-[260px] w-full object-cover md:h-[420px]"
              loading="lazy"
            />
          </div>
        </section>

        {/* Block 2 - image left, text right */}
        <section className="mt-16 grid items-center gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
            <img
              src="/images/cameras/cam2.jpg"
              alt="Compact wall-mounted smart security camera"
              className="h-[260px] w-full object-cover md:h-[360px]"
              loading="lazy"
            />
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Compact Smart Cameras</div>
            <p className="mt-3 text-sm leading-7 text-white/70 md:text-base">
              Smaller smart cameras work well in indoor areas, private entrances, smaller office spaces,
              and locations where a more subtle device is preferred. These systems are useful when you want
              app-based access, motion alerts, and a simple everyday viewing experience without a bulky setup.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/70 md:text-base">
              They can be a good fit for residential entry points, interior hallways, condo units,
              and certain light commercial areas where design and simplicity matter.
            </p>
          </div>
        </section>

        {/* Block 3 - image right, text left */}
        <section className="mt-16 grid items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="text-sm font-semibold text-white">Dome Cameras</div>
            <p className="mt-3 text-sm leading-7 text-white/70 md:text-base">
              Dome cameras are commonly used for ceilings in lobbies, retail spaces, offices,
              interior common areas, and covered entry zones. Their shape is clean and compact,
              and they can blend more naturally into finished spaces while still providing strong coverage.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/70 md:text-base">
              This style is often a great choice when the system needs to feel professional,
              low-profile, and suitable for both residential common areas and commercial interiors.
            </p>
          </div>

          <div className="order-1 md:order-2 overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
            <img
              src="/images/cameras/cam3.jpg"
              alt="Dome camera on ceiling"
              className="h-[260px] w-full object-cover md:h-[360px]"
              loading="lazy"
            />
          </div>
        </section>

        {/* Block 4 - image big, text below */}
        <section className="mt-16">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
            <img
              src="/images/cameras/cam4.jpg"
              alt="Commercial PTZ security camera"
              className="h-[280px] w-full object-cover md:h-[460px]"
              loading="lazy"
            />
          </div>

          <div className="mt-6 max-w-3xl">
            <div className="text-sm font-semibold text-white">PTZ and Commercial Coverage</div>
            <p className="mt-3 text-sm leading-7 text-white/70 md:text-base">
              For larger outdoor zones and certain commercial spaces, PTZ-style cameras can offer a wider
              monitoring advantage. These are useful in areas such as parking lots, large exterior walls,
              building entrances, and open commercial surroundings where visibility needs are broader.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/70 md:text-base">
              The right camera model depends on the space, the coverage goal, the mounting location,
              and how you want to view and manage recordings later. That is why planning and proper installation
              matter just as much as the camera itself.
            </p>
          </div>
        </section>

        {/* Closing section */}
        <section className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Reliable coverage, without the mess
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
            A good security camera system should do more than just record video. It should fit the space,
            cover the right areas, stay easy to use, and look clean after installation. Whether the project
            is residential or commercial, our goal is to create a system that feels dependable, practical,
            and professionally finished.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-2xl bg-white px-5 py-3 text-center text-sm font-medium text-black hover:bg-white/90"
            >
              Request a quote
            </Link>

            <Link
              href="/services"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10"
            >
              Back to services
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}