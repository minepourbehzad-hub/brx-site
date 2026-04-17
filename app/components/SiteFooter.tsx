import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="tracking-[0.35em] text-sm text-white">BRX</div>
            <p className="mt-3 text-sm text-white/60 leading-6">
              Premium renovation, smart home integration, and security cameras in
              Vancouver. Clean wiring, clean finish, reliable execution.
            </p>
          </div>

          <div>
            <div className="text-sm text-white/80">Services</div>
            <div className="mt-3 grid gap-2 text-sm">
              <Link className="text-white/60 hover:text-white" href="/services/renovation">
                Renovation
              </Link>
              <Link className="text-white/60 hover:text-white" href="/services/smart-home">
                Smart Home
              </Link>
              <Link
                className="text-white/60 hover:text-white"
                href="/services/security-cameras"
              >
                Security Cameras
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm text-white/80">Contact</div>
            <div className="mt-3 grid gap-2 text-sm text-white/60">
              <div>Vancouver, BC</div>
              <Link className="text-white/60 hover:text-white" href="/contact">
                Request a quote
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/50">
          <div>© {new Date().getFullYear()} BRX. All rights reserved.</div>
          <div className="flex gap-4">
            <Link className="hover:text-white" href="/work">
              Work
            </Link>
            <Link className="hover:text-white" href="/#about">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
