import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  Home,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import SupportTicketForm from '@/components/SupportTicketForm';

export const metadata: Metadata = {
  title: 'Contact Level1PC — IT Support in Brockport, NY',
  description:
    'Contact Level1PC for IT support in Brockport, NY. Call (585) 632-3030 or submit a support request online. Hours: Monday–Friday 8AM–4PM.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-[#0f172a] pt-20"
        aria-labelledby="contact-hero-heading"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-brand-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1
              id="contact-hero-heading"
              className="text-4xl font-extrabold text-white sm:text-5xl"
            >
              Get in Touch
            </h1>
            <p className="mt-5 text-lg text-slate-400">
              Ready to solve your IT problem? Choose the contact method that works best for you.
              We respond quickly and always communicate clearly.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-white"
          aria-hidden="true"
        />
      </section>

      {/* Contact methods */}
      <section className="py-20" aria-labelledby="contact-methods-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="contact-methods-heading" className="sr-only">
            Contact methods
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="tel:5856323030"
              className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-100 transition hover:ring-brand-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Call (585) 632-3030"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 ring-1 ring-brand-100 transition group-hover:bg-brand-500">
                <Phone
                  className="h-7 w-7 text-brand-600 transition group-hover:text-white"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mb-1 font-semibold text-slate-900">Phone</h3>
              <p className="text-sm font-semibold text-brand-600">(585) 632-3030</p>
              <p className="mt-1 text-xs text-slate-500">Fastest response</p>
            </a>

            <Link
              href="/business"
              className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-100 transition hover:ring-brand-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Business Support"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 ring-1 ring-brand-100 transition group-hover:bg-brand-500">
                <Building2
                  className="h-7 w-7 text-brand-600 transition group-hover:text-white"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mb-1 font-semibold text-slate-900">Business Support</h3>
              <p className="text-sm font-semibold text-brand-600">Managed IT &amp; Networks</p>
              <p className="mt-1 text-xs text-slate-500">For companies &amp; organizations</p>
            </Link>

            <Link
              href="/residential"
              className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-100 transition hover:ring-brand-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Residential Support"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 ring-1 ring-brand-100 transition group-hover:bg-brand-500">
                <Home
                  className="h-7 w-7 text-brand-600 transition group-hover:text-white"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mb-1 font-semibold text-slate-900">Residential Support</h3>
              <p className="text-sm font-semibold text-brand-600">Repairs &amp; Home Tech</p>
              <p className="mt-1 text-xs text-slate-500">For homeowners &amp; families</p>
            </Link>

            <div className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-100">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 ring-1 ring-brand-100">
                <MapPin className="h-7 w-7 text-brand-600" aria-hidden="true" />
              </div>
              <h3 className="mb-1 font-semibold text-slate-900">Location</h3>
              <address className="not-italic text-sm text-slate-600">
                Brockport, NY 14420<br />Monroe County
              </address>
              <p className="mt-1 text-xs text-slate-500">On-site visits available</p>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-100">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 ring-1 ring-brand-100">
                <Clock className="h-7 w-7 text-brand-600" aria-hidden="true" />
              </div>
              <h3 className="mb-1 font-semibold text-slate-900">Hours</h3>
              <p className="text-sm text-slate-600">Mon–Fri: 8AM–4PM</p>
              <p className="text-sm text-slate-500">Sat–Sun: By Appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form choice */}
      <section className="bg-slate-50 py-24" aria-labelledby="form-choice-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 id="form-choice-heading" className="section-heading">
              Submit a Support Request
            </h2>
            <p className="section-subheading">
              Select your support category below and fill out the multi-step form. We will be in
              touch promptly.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Business form */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0f172a]">
                  <Building2 className="h-5 w-5 text-brand-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Business Support</h3>
                  <p className="text-sm text-slate-500">For companies and organizations</p>
                </div>
              </div>
              <SupportTicketForm type="business" />
            </div>

            {/* Residential form */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200">
                  <Home className="h-5 w-5 text-slate-700" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Residential Support</h3>
                  <p className="text-sm text-slate-500">For homeowners and individuals</p>
                </div>
              </div>
              <SupportTicketForm type="residential" />
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-20" aria-labelledby="service-area-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="service-area-heading" className="section-heading">
              Service Area
            </h2>
            <p className="section-subheading">
              We provide on-site IT support throughout Brockport and the greater Monroe County
              region. Remote support is available statewide.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                'Brockport',
                'Spencerport',
                'Rochester',
                'Hilton',
                'Hamlin',
                'Albion',
                'Holley',
                'Greece',
                'Gates',
                'Ogden',
                'Clarkson',
                'Monroe County',
              ].map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
