"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/business", label: "Business Support" },
  { href: "/residential", label: "Residential Support" },
  { href: "/about", label: "About & Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-[#0f172a] shadow-lg shadow-slate-900/20"
          : "bg-[#0f172a]/90 backdrop-blur-sm"
      }`}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            aria-label="Level1PC — Home"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white p-1 transition-opacity group-hover:opacity-90">
              <Image
                src="/Company-logo-Main-clear.png"
                alt="Level1PC logo"
                width={36}
                height={36}
                className="h-9 w-auto object-contain"
                priority
              />
            </div>
            <div className="leading-none">
              <span className="block text-lg font-bold tracking-tight text-white">
                Level<span className="text-brand-400">1</span>PC
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-widest text-slate-400">
                IT Service &amp; Support
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
                  pathname === link.href
                    ? "bg-brand-500/10 text-brand-400"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone CTA */}
          <a
            href="tel:5856323030"
            className="hidden items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 lg:flex"
            aria-label="Call us at (585) 632-3030"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            (585) 632-3030
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-slate-300 hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`border-t border-slate-800 bg-[#0f172a] transition-all duration-200 lg:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="mx-auto max-w-7xl space-y-1 px-4 py-4"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-md px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                pathname === link.href
                  ? "bg-brand-500/10 text-brand-400"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:5856323030"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-label="Call us at (585) 632-3030"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            (585) 632-3030
          </a>
        </nav>
      </div>
    </header>
  );
}
