import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  Wrench,
  Wifi,
  Monitor,
  HardDrive,
  Zap,
  Phone,
  CheckCircle,
  ArrowRight,
  Home,
  MapPin,
  Laptop,
  RefreshCw,
  AlertTriangle,
  Battery,
} from 'lucide-react';
import SupportTicketForm from '@/components/SupportTicketForm';

export const metadata: Metadata = {
  title: 'Residential Computer Repair & IT Support — Brockport NY',
  description:
    'Virus removal, hardware repairs, Wi-Fi setup, and slow PC troubleshooting for homeowners in Brockport, NY and Monroe County. On-site and remote support available. No fix, no fee.',
  alternates: { canonical: '/residential' },
};

const residentialServices = [
  {
    icon: Shield,
    id: 'virus-removal',
    title: 'Virus & Malware Removal',
    description:
      'Ransomware, spyware, adware, and trojans can devastate your personal files and steal your identity. Our technicians use professional-grade tools to thoroughly eliminate all threats and harden your system against future infections.',
    features: [
      'Complete malware scan and deep-clean',
      'Ransomware identification and remediation',
      'Browser hijacker and adware removal',
      'Installation of reputable antivirus/anti-malware',
      'Security hardening and safe-browsing guidance',
    ],
  },
  {
    icon: Zap,
    id: 'slow-pc',
    title: 'Slow PC & Performance Optimization',
    description:
      'A sluggish computer is not always a sign of hardware failure. Often the culprit is startup bloat, fragmented storage, overheating, or outdated drivers. We diagnose the root cause and restore your machine to like-new speed.',
    features: [
      'Comprehensive performance diagnostic',
      'Startup program and service cleanup',
      'Thermal paste replacement & cooling maintenance',
      'Storage optimization (SSD check, defrag, cleanup)',
      'Driver and Windows/macOS update management',
    ],
  },
  {
    icon: Wrench,
    id: 'hardware-upgrades',
    title: 'Hardware Repairs & Upgrades',
    description:
      'From a cracked laptop screen to a failing hard drive, we handle both repairs and performance upgrades. Upgrading your RAM or swapping a spinning disk for an SSD can breathe years of life into an older machine.',
    features: [
      'Laptop screen, keyboard & trackpad replacement',
      'HDD to SSD migration (with full data transfer)',
      'RAM and storage capacity upgrades',
      'Power jack and charging port repair',
      'Desktop component diagnosis and replacement',
    ],
  },
  {
    icon: HardDrive,
    id: 'data-recovery',
    title: 'Data Recovery & Backup Setup',
    description:
      'Accidentally deleted files or a failed drive does not have to mean permanent data loss. We attempt recovery from mechanically failed drives, corrupted partitions, and accidental deletions, and then help you set up a reliable backup routine.',
    features: [
      'SSD and HDD recovery from logical failures',
      'Deleted file and partition recovery',
      'External drive and USB recovery',
      'Cloud backup configuration (Google Drive, OneDrive)',
      'Automated local backup scheduling',
    ],
  },
  {
    icon: Wifi,
    id: 'wifi-setup',
    title: 'Home Wi-Fi Setup & Security',
    description:
      'Poor Wi-Fi coverage and default router settings are a privacy risk. We optimize your home wireless network for coverage and speed, secure it against intruders, and configure guest networks to keep your personal devices safe.',
    features: [
      'Router placement and channel optimization',
      'WPA3 encryption and strong password setup',
      'Guest network configuration for visitors/IoT',
      'Mesh Wi-Fi system installation and tuning',
      'Parental control and content filtering setup',
    ],
  },
  {
    icon: Laptop,
    id: 'remote-support',
    title: 'Remote & On-Site Support',
    description:
      'Many common issues can be resolved without us ever entering your home. Our secure remote support lets us connect directly to your screen in minutes. For hardware issues, we offer on-site visits throughout Brockport and Monroe County.',
    features: [
      'Secure remote desktop sessions available same-day',
      'On-site visits to Brockport, Spencerport, and surrounding areas',
      'Operating system reinstallation and setup',
      'Software installation, configuration & troubleshooting',
      'New device setup and data transfer from old machine',
    ],
  },
];

const commonIssues = [
  { icon: AlertTriangle, label: 'Pop-up Ads & Browser Redirects' },
  { icon: Battery, label: 'Laptop Battery Draining Fast' },
  { icon: Monitor, label: 'Blue Screen (BSOD) Errors' },
  { icon: Wifi, label: 'Dropping Wi-Fi Connection' },
  { icon: RefreshCw, label: 'Stuck Windows Updates' },
  { icon: HardDrive, label: 'Clicking / Failing Hard Drive' },
];

export default function ResidentialPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-[#0f172a] pt-20"
        aria-labelledby="residential-hero-heading"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-brand-500/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5">
              <Home className="h-4 w-4 text-brand-400" aria-hidden="true" />
              <span className="text-sm font-medium text-brand-400">Residential IT Support</span>
            </div>
            <h1
              id="residential-hero-heading"
              className="text-4xl font-extrabold leading-tight text-white sm:text-5xl"
            >
              Computer Repair for{' '}
              <span className="text-brand-400">Brockport Homeowners</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Affordable, honest, and personalized computer repair for families and individuals in
              Brockport, NY. We fix it right the first time — or you pay nothing.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-1.5 rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-brand-400" aria-hidden="true" />
                On-Site Visits Available
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                <Monitor className="h-4 w-4 text-brand-400" aria-hidden="true" />
                Remote Support Available
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                <Shield className="h-4 w-4 text-brand-400" aria-hidden="true" />
                No Fix, No Fee
              </div>
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#ticket"
                className="flex items-center gap-2 rounded-lg bg-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <Zap className="h-5 w-5" aria-hidden="true" />
                Request Repair Help
              </a>
              <a
                href="tel:5856323030"
                className="flex items-center gap-2 rounded-lg border-2 border-slate-600 px-7 py-3.5 text-base font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                aria-label="Call (585) 632-3030"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                (585) 632-3030
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-white"
          aria-hidden="true"
        />
      </section>

      {/* Common issues */}
      <section className="py-16" aria-labelledby="common-issues-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="common-issues-heading"
            className="mb-8 text-center text-xl font-semibold text-slate-700"
          >
            Common Issues We Solve Every Day
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {commonIssues.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2.5 rounded-xl bg-slate-50 p-5 text-center ring-1 ring-slate-100"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-slate-100">
                  <Icon className="h-5 w-5 text-brand-600" aria-hidden="true" />
                </div>
                <span className="text-xs font-medium leading-tight text-slate-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16" aria-labelledby="residential-services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 id="residential-services-heading" className="section-heading">
              Our Residential IT Services
            </h2>
            <p className="section-subheading">
              We offer everything from quick remote sessions to comprehensive on-site repair visits.
              No technical jargon — just honest, plain-language explanations and real solutions.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {residentialServices.map(({ icon: Icon, id, title, description, features }) => (
              <article
                key={id}
                id={id}
                className="card-service scroll-mt-24"
                aria-labelledby={`res-service-${id}`}
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 ring-1 ring-brand-100">
                    <Icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
                  </div>
                  <h3 id={`res-service-${id}`} className="text-lg font-semibold text-slate-900">
                    {title}
                  </h3>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-slate-500">{description}</p>
                <ul className="space-y-2" role="list">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                        aria-hidden="true"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Support Ticket Form */}
      <section
        id="ticket"
        className="bg-slate-50 py-24 scroll-mt-20"
        aria-labelledby="res-ticket-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <h2 id="res-ticket-heading" className="section-heading">
                Request Residential Support
              </h2>
              <p className="section-subheading">
                Tell us what is happening and we will be in touch quickly. For urgent issues, do not
                hesitate to call us directly at{' '}
                <a
                  href="tel:5856323030"
                  className="font-semibold text-brand-600 hover:underline focus-visible:outline-none focus-visible:underline"
                >
                  (585) 632-3030
                </a>
                .
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: MapPin, text: 'On-site visits available in Brockport and nearby areas' },
                  { icon: Monitor, text: 'Secure remote sessions for software issues' },
                  { icon: Shield, text: 'If we cannot fix it, there is no charge — guaranteed' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-slate-200">
                      <Icon className="h-4 w-4 text-brand-600" aria-hidden="true" />
                    </div>
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <SupportTicketForm type="residential" />
          </div>
        </div>
      </section>
    </>
  );
}
