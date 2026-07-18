import Link from "next/link";
import Image from "next/image";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function ServicePageShell({
  title,
  subtitle,
  bullets,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
}) {
  return (
    <main className="pt-10">
      <div className="mx-auto max-w-6xl px-5 pb-20">
        {/* Top label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          Nestora • Service
        </div>

        {/* Title */}
        <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
          {subtitle}
        </p>

        {/* Bullet cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {bullets.map((b) => (
            <div
              key={b}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-sm leading-6 text-white/85">{b}</div>
              <div className="mt-4 h-px w-full bg-white/10" />
              <div className="mt-4 text-xs text-white/50">Nestora standard</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
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

        {/*  */}
        <section className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-white">Project</div>
              <p className="mt-2 text-sm text-white/60">
                Clean lines, modern finish, and a more premium final result.
              </p>
            </div>

            <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 md:inline-flex">
              Nestora 
            </span>
          </div>
<Image
  src="/images/renovation/featured1.jpg"
  alt="Featured renovation project"
  width={1600}
  height={900}
  className="h-[260px] w-full object-cover md:h-[460px]"
  sizes="100vw"
/>
          <div className="mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
           <Image
  src="/images/renovation/future 2.jpg"
  alt="Featured renovation project"
  width={1600}
  height={900}
  className="h-[260px] w-full object-cover md:h-[460px]"
  sizes="100vw"
/>
          </div>

        </section>

        {/* Before / After sliders */}
        <section className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-white">Before / After</div>
              <p className="mt-2 text-sm text-white/60">
                Drag the line to compare the result.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <BeforeAfterSlider
              beforeSrc="/images/renovation/before1.jpeg"
              afterSrc="/images/renovation/after1.jpg"
              alt="Renovation before and after 1"
              heightClass="h-72 md:h-96"
            />


            <BeforeAfterSlider
              beforeSrc="/images/renovation/before2.jpeg"
              afterSrc="/images/renovation/after2.jpeg"
              alt="Renovation before and after 2"
              heightClass="h-72 md:h-96"
            />

            <BeforeAfterSlider
              beforeSrc="/images/renovation/before5.jpeg"
              afterSrc="/images/renovation/after5.jpeg"
              alt="Renovation before and after 2"
              heightClass="h-72 md:h-96"

            /> 
<BeforeAfterSlider
              beforeSrc="/images/renovation/before6.jpeg"
              afterSrc="/images/renovation/after6.jpeg"
              alt="Renovation before and after 2"
              heightClass="h-72 md:h-96"
            />


          </div>
        </section>

        {/* Minimal gallery */}
        <section className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-white">Project Gallery</div>
              <p className="mt-2 text-sm text-white/60">
                Detail shots and final finishing.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-12">
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 md:col-span-7">
              <img
                src="/images/renovation/after9.jpeg"
                alt="Renovation gallery 1"
                className="h-[240px] w-full object-cover md:h-[420px]"
                loading="lazy"
              />
            </div>

            <div className="grid gap-4 md:col-span-5">
              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
                <img
                  src="/images/renovation/after10.jpeg"
                  alt="Renovation gallery 2"
                  className="h-[200px] w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
                <img
                  src="/images/renovation/after8.jpeg"
                  alt="Renovation gallery 3"
                  className="h-[200px] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
{/*قسمت هاید شده
        <section className="mt-16">
          <div>
            <div className="text-sm font-semibold text-white">More Work</div>
            <p className="mt-2 text-sm text-white/60">
              Add more project images here anytime.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
              <img
                src="/images/renovation/after3.jpeg"
                alt="More work 1"
                className="h-[220px] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
              <img
                src="/images/renovation/before3.jpeg"
                alt="More work 2"
                className="h-[220px] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
              <img
                src="/images/renovation/after4.jpeg"
                alt="More work 3"
                className="h-[220px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

      */}
      </div>
    </main>
  );
}