import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Wifi,
  Server,
  Monitor,
  Wrench,
  CloudCog,
  Lock,
  Users,
  Star,
  Building2,
  Home,
  Zap,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Level1PC | IT Support & Computer Repair in Brockport, NY',
  description:
    'Your local IT support specialist in Brockport, NY since 2011. Expert computer repair, managed IT services, virus removal, and network security for businesses and residents. No fix, no fee.',
  alternates: { canonical: '/' },
};

const whyChooseUs = [
  {
    icon: Clock,
    title: 'Fast Turnaround Times',
    description:
      'Most repairs completed same-day or next-day. We respect your time — no weeks-long wait, no shipping your device across the country.',
  },
  {
    icon: Award,
    title: '15+ Years of Local Trust',
    description:
      'Serving Brockport and Monroe County since 2011. We have built a reputation on honest pricing, clear communication, and reliable results.',
  },
  {
    icon: Shield,
    title: 'No Fix, No Fee Guarantee',
    description:
      'If we cannot diagnose or resolve your issue, you pay absolutely nothing. We stand behind every job we take on — zero risk to you.',
  },
  {
    icon: Users,
    title: 'Personalized Local Service',
    description:
      'You talk directly to a technician, not a call center. We know our clients by name and tailor every solution to your specific needs.',
  },
];

const businessServices = [
  { icon: Server, label: 'Managed IT Services (MSP)' },
  { icon: Wifi, label: 'Network Infrastructure' },
  { icon: Lock, label: 'Security & Firewalls' },
  { icon: CloudCog, label: 'Cloud Backup & Recovery' },
];

const residentialServices = [
  { icon: Shield, label: 'Virus & Malware Removal' },
  { icon: Wrench, label: 'Hardware Repairs & Upgrades' },
  { icon: Wifi, label: 'Home Wi-Fi Setup & Security' },
  { icon: Monitor, label: 'Slow PC Troubleshooting' },
];

const stats = [
  { value: '15+', label: 'Years in Business' },
  { value: '2,000+', label: 'Clients Served' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '$0', label: 'If We Cannot Fix It' },
];

const testimonialHighlights = [
  {
    quote: 'Had a bad virus that took out my whole system. Level1PC had it running again the same day. Unbelievable service.',
    author: 'David R.',
    location: 'Brockport, NY',
    rating: 5,
  },
  {
    quote: 'They set up our entire office network and manage it monthly. Never had a major outage since. Highly recommend to any small business.',
    author: 'Sandra K.',
    location: 'Rochester, NY',
    rating: 5,
  },
  {
    quote: 'Most honest tech shop I have ever used. They told me exactly what was wrong, fixed it fast, and the price was fair.',
    author: 'Tom M.',
    location: 'Spencerport, NY',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section — background image */}
      <section
        className="relative flex min-h-screen items-center overflow-hidden pt-16"
        aria-labelledby="hero-heading"
      >
        {/* Background image */}
        <Image
          src="/level1pc_main_background.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          aria-hidden="true"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/70" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" aria-hidden="true" />
              <span className="text-sm font-semibold text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Locally Owned &amp; Operated Since 2011 &middot; Brockport, NY
              </span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl"
            >
              Your Local IT Support{' '}
              <span className="relative whitespace-nowrap text-brand-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Specialist</span>{' '}
              in Brockport, NY
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-xl">
              From virus removal and hardware repairs to full managed IT services and
              network security for businesses — Level1PC delivers expert technology solutions with
              value-based pricing and a no-fix, no-fee guarantee.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/business"
                className="group flex items-center gap-2 rounded-lg bg-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/30 transition-all duration-200 hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <Building2 className="h-5 w-5" aria-hidden="true" />
                Business Support
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                href="/residential"
                className="flex items-center gap-2 rounded-lg border-2 border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/70 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <Home className="h-5 w-5" aria-hidden="true" />
                Residential Support
              </Link>
            </div>

            {/* Quick contact strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <a
                href="tel:5856323030"
                className="group flex items-center gap-2 text-sm transition-colors focus-visible:outline-none focus-visible:underline"
                aria-label="Call (585) 632-3030"
              >
                <Phone className="h-4 w-4 text-brand-400" aria-hidden="true" />
                <span className="font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] group-hover:text-brand-400">(585) 632-3030</span>
              </a>
              <span className="text-white/30" aria-hidden="true">|</span>
              <span className="flex items-center gap-2 text-sm text-white/70 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                <Clock className="h-4 w-4 text-brand-400" aria-hidden="true" />
                Mon–Fri 8AM–4PM
              </span>
              <span className="text-white/30" aria-hidden="true">|</span>
              <span className="flex items-center gap-2 text-sm font-semibold text-brand-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                <Shield className="h-4 w-4" aria-hidden="true" />
                No Fix, No Fee
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-white/50" />
          </div>
        </div>
      </section>

      {/* Stats bar — light with brand accent */}
      <section className="border-y border-slate-100 bg-white" aria-label="Key statistics">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 divide-x divide-y divide-slate-100 lg:grid-cols-4 lg:divide-y-0">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center px-8 py-10 text-center">
                <dd className="text-3xl font-extrabold text-brand-500">{stat.value}</dd>
                <dt className="mt-1 text-sm font-medium text-slate-500">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Service paths */}
      <section className="bg-slate-50 py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 id="services-heading" className="section-heading">
              Choose Your Support Path
            </h2>
            <p className="section-subheading">
              Whether you run a business that depends on reliable technology or you need a personal
              device fixed, we have the expertise to help.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Business card — dark accent card */}
            <div className="group relative overflow-hidden rounded-2xl bg-[#0f172a] p-10 text-white transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/30">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-500/10 ring-1 ring-brand-500/20">
                <Building2 className="h-7 w-7 text-brand-400" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">Business IT Support</h3>
              <p className="mb-6 leading-relaxed text-slate-400">
                Comprehensive managed IT services designed to keep your business running smoothly.
                From proactive network monitoring to enterprise-grade security solutions, we are
                your dedicated IT department.
              </p>
              <ul className="mb-8 grid grid-cols-2 gap-2.5" role="list">
                {businessServices.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2 text-sm text-slate-300">
                    <Icon className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
              <Link
                href="/business"
                className="group/link inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Explore Business Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>

            {/* Residential card — white */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-10 ring-1 ring-slate-200 transition-all duration-300 hover:shadow-xl hover:ring-brand-200">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 ring-1 ring-slate-200">
                <Home className="h-7 w-7 text-slate-700" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-slate-900">Residential Support</h3>
              <p className="mb-6 leading-relaxed text-slate-600">
                Personal, affordable computer repair and IT services for homeowners and families.
                We offer on-site visits and remote support to fix your devices without the big-box
                store runaround.
              </p>
              <ul className="mb-8 grid grid-cols-2 gap-2.5" role="list">
                {residentialServices.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2 text-sm text-slate-700">
                    <Icon className="h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
              <Link
                href="/residential"
                className="group/link inline-flex items-center gap-2 rounded-lg border-2 border-slate-800 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-all hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2"
              >
                Explore Residential Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24" aria-labelledby="why-choose-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 id="why-choose-heading" className="section-heading">
              Why Brockport Trusts Level1PC
            </h2>
            <p className="section-subheading">
              We built this business on a simple promise: fix the problem correctly, charge a fair
              price, and stand behind our work. That is why our customers keep coming back.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card-service group">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-500 group-hover:ring-brand-500">
                  <Icon
                    className="h-6 w-6 text-brand-600 transition-colors group-hover:text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-2 text-base font-semibold text-slate-900">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="bg-slate-50 py-24" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 id="testimonials-heading" className="section-heading">
              What Our Customers Say
            </h2>
            <p className="section-subheading">
              Real reviews from real people in the Brockport and Monroe County community.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonialHighlights.map((t) => (
              <figure
                key={t.author}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100"
              >
                <div className="mb-4 flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="grow">
                  <p className="text-sm leading-relaxed text-slate-600">&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 ring-1 ring-brand-100">
                    <span className="text-sm font-semibold text-brand-700" aria-hidden="true">
                      {t.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.author}</p>
                    <p className="text-xs text-slate-500">{t.location}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/about#testimonials"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-brand-500 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              Read All Reviews
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner — intentionally dark for contrast */}
      <section className="bg-[#0f172a] py-20" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-1.5">
              <Zap className="h-4 w-4 text-brand-400" aria-hidden="true" />
              <span className="text-sm font-medium text-brand-400">Ready when you are</span>
            </div>
            <h2 id="cta-heading" className="text-3xl font-bold text-white sm:text-4xl">
              IT Problems Do Not Wait.<br />
              <span className="text-brand-400">Neither Do We.</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Call us now or submit a support request online. We will get back to you fast.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:5856323030"
                className="flex items-center gap-2 rounded-lg bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                aria-label="Call (585) 632-3030"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call (585) 632-3030
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-lg border-2 border-slate-600 px-8 py-4 text-base font-semibold text-slate-200 transition-all hover:border-slate-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Submit a Support Request
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
