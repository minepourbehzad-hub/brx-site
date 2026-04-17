import Link from "next/link";
import SectionBlock from "@/app/components/SectionBlock";

export default function AboutPage() {
  return (
    <main className="pt-10">
      <SectionBlock
        title="About"
        subtitle=""
        ctaLabel="Get a quote"
        ctaHref="/contact"
      >
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">

          <p className="text-sm text-white/70 leading-relaxed">
            BRX is a collective of licensed professionals and skilled specialists dedicated to delivering high-quality solutions for residential and commercial spaces across Vancouver.
          </p>

          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Our team brings together expertise in renovation, electrical work, smart home systems, security cameras, and general property improvements. By combining different specialties under one team, we are able to handle projects efficiently and deliver complete solutions for our clients.
          </p>

          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            With years of hands-on experience working in Vancouver, we understand the expectations, standards, and quality that local homes and businesses require. That local experience allows us to approach every project with confidence and precision.
          </p>

          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            At BRX, we believe great work starts with understanding the client. Our goal is simple: deliver clean, professional results that match exactly what our clients envision. We focus on detail, quality craftsmanship, and solutions that improve the functionality and value of your space.
          </p>

          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Whether it’s a small upgrade or a full renovation, BRX is the team you can rely on to get the job done right.
          </p>


          <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">

            <div className="text-sm font-semibold">How we work</div>

            <ul className="mt-3 space-y-2 text-sm text-white/70 list-disc pl-5">
              <li>Fast response</li>
              <li>Clear quote + timeline</li>
              <li>Clean routing and clean finish</li>
              <li>Respect your home + leave it tidy</li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="inline-flex justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white hover:bg-white/10 transition-colors"
              >
                Request a quote
              </Link>

              <Link
                href="/work"
                className="inline-flex justify-center rounded-2xl border border-white/15 bg-black/40 px-5 py-3 text-sm text-white/90 hover:bg-white/5 transition-colors"
              >
                View our work
              </Link>

            </div>

          </div>

        </div>
      </SectionBlock>
    </main>
  );
}