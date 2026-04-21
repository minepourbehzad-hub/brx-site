import Link from "next/link";
import {
  Phone,
  MapPin,
  Camera,
  MessageCircle,
} from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="tracking-[0.35em] text-sm text-white">
              BRX
            </div>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Premium renovation, smart home integration, and security cameras
              in Vancouver. Clean wiring, clean finish, reliable execution.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="text-sm text-white/80">Services</div>

            <div className="mt-3 grid gap-2 text-sm">
              <Link
                className="text-white/60 hover:text-white"
                href="/services/renovation"
              >
                Renovation
              </Link>

              <Link
                className="text-white/60 hover:text-white"
                href="/services/smart-home"
              >
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

          {/* Contact */}
          <div>
            <div className="text-sm text-white/80">Contact</div>

            <div className="mt-3 grid gap-3 text-sm text-white/60">
              {/* Location */}
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>North Vancouver, BC</span>
              </div>

              {/* Phone */}
              <a
                className="flex items-center gap-3 hover:text-white"
                href="tel:+17780000000"
              >
                <Phone size={16} />
                +1 604 999 6045
              </a>

              {/* WhatsApp */}
              <a
                className="flex items-center gap-3 hover:text-white"
                href="https://wa.me/16049996045"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>

              {/* Instagram */}
              <a
                className="flex items-center gap-3 hover:text-white"
                href="https://instagram.com/brx.group"
                target="_blank"
                rel="noreferrer"
              >
                <Camera size={16} />
                @brx.group
              </a>

              <Link
                className="hover:text-white"
                href="/contact"
              >
                Request a quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} BRX. All rights reserved.
          </div>

          <div className="flex gap-4">
            <Link
              className="hover:text-white"
              href="/#about"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}