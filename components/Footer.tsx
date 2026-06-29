import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Shield, Building2, Home } from "lucide-react";

const serviceLinks = [
  { href: "/business", label: "Business IT Support" },
  { href: "/business#managed-services", label: "Managed IT Services" },
  { href: "/business#network-security", label: "Network Security" },
  { href: "/business#cloud-backup", label: "Cloud & Data Backup" },
  { href: "/residential", label: "Residential Repair" },
  { href: "/residential#virus-removal", label: "Virus Removal" },
  { href: "/residential#hardware-upgrades", label: "Hardware Upgrades" },
];

const companyLinks = [
  { href: "/about", label: "About Level1PC" },
  { href: "/about#testimonials", label: "Customer Reviews" },
  { href: "/contact", label: "Contact Us" },
  { href: "/business#ticket", label: "Submit a Ticket" },
  { href: "/residential#ticket", label: "Residential Request" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300" role="contentinfo">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="group mb-5 inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Level1PC — Home"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white p-1">
                <Image
                  src="/Company-logo-Main-clear.png"
                  alt="Level1PC logo"
                  width={36}
                  height={36}
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div className="leading-none">
                <span className="block text-lg font-bold text-white">
                  Level<span className="text-brand-400">1</span>PC
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-widest text-slate-500">
                  IT Service &amp; Support
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Trusted IT support for businesses and residents in Brockport, NY
              and across Monroe County since 2011. Your local technology partner
              — no fix, no fee.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <Shield className="h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
              <span className="text-xs font-semibold text-brand-400 uppercase tracking-wide">
                No Fix, No Fee Guarantee
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h2>
            <ul className="space-y-2.5" role="list">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-brand-400 focus-visible:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h2>
            <ul className="space-y-2.5" role="list">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-brand-400 focus-visible:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h2>
            <address className="not-italic space-y-3">
              <a
                href="tel:5856323030"
                className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-brand-400 focus-visible:outline-none focus-visible:underline"
                aria-label="Phone: (585) 632-3030"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                (585) 632-3030
              </a>
              <a
                href="/business"
                className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-brand-400 focus-visible:outline-none focus-visible:underline"
                aria-label="Business Support"
              >
                <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                Business Support
              </a>
              <a
                href="/residential"
                className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-brand-400 focus-visible:outline-none focus-visible:underline"
                aria-label="Residential Support"
              >
                <Home className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                Residential Support
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                <span>Brockport, NY<br />Monroe County, 14420</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                <span>
                  Mon–Fri: 8:00 AM – 4:00 PM<br />
                  <span className="text-slate-500">Sat–Sun: By Appointment</span>
                </span>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-xs text-slate-500 sm:text-left">
            &copy; {new Date().getFullYear()} Level1PC IT Service & Support. All rights reserved.
            Serving Brockport, NY and Monroe County.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300 focus-visible:outline-none focus-visible:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300 focus-visible:outline-none focus-visible:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
