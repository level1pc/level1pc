import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Server,
  Wifi,
  Lock,
  CloudCog,
  ShieldCheck,
  BarChart3,
  RefreshCw,
  Headphones,
  Phone,
  CheckCircle,
  ArrowRight,
  Building2,
  Zap,
  Network,
  HardDrive,
  Users,
} from 'lucide-react';
import SupportTicketForm from '@/components/SupportTicketForm';

export const metadata: Metadata = {
  title: 'Business IT Support & Managed Services — Monroe County NY',
  description:
    'Level1PC provides comprehensive managed IT services, network security, firewall management, cloud backup, and proactive IT support for businesses in Brockport and Monroe County, NY.',
  alternates: { canonical: '/business' },
};

const managedServices = [
  {
    icon: Server,
    id: 'managed-services',
    title: 'Managed IT Services (MSP)',
    description:
      'Outsource your entire IT operation to us. We proactively monitor your infrastructure 24/7, apply security patches, manage updates, and resolve issues before they disrupt your operations — at a flat monthly rate.',
    features: [
      'Remote monitoring & management (RMM)',
      'Patch management & software updates',
      'Help desk support via phone, email & remote',
      'Monthly performance & health reporting',
      'IT asset lifecycle management',
    ],
  },
  {
    icon: Network,
    id: 'network-infrastructure',
    title: 'Network Infrastructure Management',
    description:
      'A fast, reliable network is the backbone of any modern business. We design, install, and maintain structured cabling, switches, routers, access points, and VLANs tailored to your specific building layout and workload.',
    features: [
      'Structured cabling & rack installation',
      'Managed switches, routers & access points',
      'VLAN segmentation & QoS configuration',
      'Wireless coverage surveys & optimization',
      'Network documentation & diagrams',
    ],
  },
  {
    icon: Lock,
    id: 'network-security',
    title: 'Network Security & Firewalls',
    description:
      'Cyber threats are more sophisticated than ever. We deploy enterprise-grade firewall appliances, configure VPN tunnels for remote workers, and implement layered security policies to protect your sensitive data.',
    features: [
      'Next-generation firewall deployment (pfSense, SonicWall, Unifi, Pi-Hole)',
      'Site-to-site and remote VPN configuration',
      'Intrusion detection & prevention (IDS/IPS)',
      'Email filtering & anti-spam solutions',
      'Regular security audits & vulnerability scanning',
    ],
  },
  {
    icon: CloudCog,
    id: 'cloud-backup',
    title: 'Cloud Backup & Disaster Recovery',
    description:
      'Data loss can be catastrophic. Our backup solutions replicate your critical files, databases, and system images to secure off-site cloud storage — so you can recover in hours, not weeks, after ransomware or hardware failure.',
    features: [
      'Automated daily incremental backups',
      'Encrypted cloud replication (AWS, Azure, or private)',
      'Bare-metal recovery for rapid system restoration',
      'RTO/RPO planning and documentation',
      'Monthly recovery test drills on request',
    ],
  },
  {
    icon: ShieldCheck,
    id: 'preventative-maintenance',
    title: 'Preventative Maintenance Plans',
    description:
      'Prevention costs far less than a crisis. Our scheduled maintenance visits cover hardware diagnostics, driver and OS updates, disk health checks, and performance tuning to extend hardware life and prevent unplanned downtime.',
    features: [
      'Quarterly on-site or remote maintenance visits (optional)',
      'Hardware diagnostics (CPU, RAM, disk, temps)',
      'OS and driver update management',
      'Antivirus/EDR deployment and monthly monitoring',
      'Priority response SLA for plan members',
    ],
  },
  {
    icon: Headphones,
    id: 'help-desk',
    title: 'Dedicated Help Desk Support',
    description:
      'Your employees deserve fast, knowledgeable support. Our technicians are reachable by phone, email, and remote session during business hours to resolve software glitches, printer issues, account lockouts, and more.',
    features: [
      'Direct access to a local technician (no offshore call centers)',
      'Remote desktop support via Splashtop SOS Remote',
      'Ticketing system with transparent status call updates',
      'Same-day response for critical issues',
      'Employee onboarding & device provisioning',
    ],
  },
];

const planTiers = [
  {
    name: 'Basic',
    tagline: 'Occasional Support',
    price: 'Pay-as-you-go',
    features: [
      'Hourly remote & on-site support',
      'No monthly commitment',
      'Standard response time 1-3 days',
      'Basic hardware diagnostics',
      'Standard rates apply',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Residential Pro',
    tagline: 'Most Popular',
    price: 'Flat Monthly Rate',
    features: [
      'Unlimited help desk support',
      'Proactive 24/7 firewall monitoring',
      'Monthly maintenance remote scans',
      'Priority same-day response',
      'Security patching included',
      'Monthly MS & AV updates',
    ],
    cta: 'Request a Quote',
    highlight: true,
  },
  {
    name: 'Business Pro',
    tagline: 'Full IT Coverage',
    price: 'Custom Pricing',
    features: [
      'Everything in Business Pro',
      'On-site dedicated technician hours',
      'Proactive 24/7 firewall monitoring',
      'Full network design & management',
      'Disaster recovery planning',
      'Compliance documentation (HIPAA, etc.)',
      'AntiVirus included for all devices',
      'Virtual CIO consulting',
    ],
    cta: 'Contact Us',
    highlight: false,
  },
];

export default function BusinessPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-[#0f172a] pt-20"
        aria-labelledby="business-hero-heading"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-brand-500/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5">
              <Building2 className="h-4 w-4 text-brand-400" aria-hidden="true" />
              <span className="text-sm font-medium text-brand-400">Business IT Solutions</span>
            </div>

            
            <h1
              id="business-hero-heading"
              className="text-4xl font-extrabold leading-tight text-white sm:text-5xl"
            >
              Managed IT Services for{' '}
              <span className="text-brand-400">Monroe County Businesses</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              From proactive network monitoring and enterprise security to cloud backup and help
              desk support, Level1PC is your complete outsourced IT department — at a predictable
              monthly cost.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#ticket"
                className="flex items-center gap-2 rounded-lg bg-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <Zap className="h-5 w-5" aria-hidden="true" />
                Submit a Support Ticket
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

      {/* Services */}
      <section className="py-24" aria-labelledby="business-services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 id="business-services-heading" className="section-heading">
              Comprehensive IT Services for Your Business
            </h2>
            <p className="section-subheading">
              Every service we offer is designed to minimize downtime, protect your data, and give
              your team the technology resources they need to succeed.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {managedServices.map(({ icon: Icon, id, title, description, features }) => (
              <article
                key={id}
                id={id}
                className="card-service scroll-mt-24"
                aria-labelledby={`service-${id}`}
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 ring-1 ring-brand-100">
                    <Icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
                  </div>
                  <h3 id={`service-${id}`} className="text-lg font-semibold text-slate-900">
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

      {/* Pricing tiers */}
      <section className="bg-slate-50 py-24" aria-labelledby="pricing-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 id="pricing-heading" className="section-heading">
              Flexible Plans for Every Business
            </h2>
            <p className="section-subheading">
              Whether you need occasional break-fix support or a full managed service agreement, we
              have a plan that fits your team and budget.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {planTiers.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl p-8 ${
                  plan.highlight
                    ? 'bg-[#0f172a] text-white shadow-2xl shadow-slate-900/30 ring-1 ring-brand-500/30'
                    : 'bg-white shadow-sm ring-1 ring-slate-100'
                }`}
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-xs font-bold text-white uppercase tracking-wide"
                    aria-label="Most popular plan"
                  >
                    Most Popular
                  </div>
                )}
                <div className="mb-2 text-sm font-medium text-slate-500">{plan.tagline}</div>
                <h3
                  className={`mb-1 text-2xl font-bold ${
                    plan.highlight ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mb-6 text-sm font-semibold ${
                    plan.highlight ? 'text-brand-400' : 'text-brand-600'
                  }`}
                >
                  {plan.price}
                </p>
                <ul className="mb-8 grow space-y-3" role="list">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 text-sm ${
                        plan.highlight ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      <CheckCircle
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.highlight ? 'text-brand-400' : 'text-brand-500'
                        }`}
                        aria-hidden="true"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#ticket"
                  className={`flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    plan.highlight
                      ? 'bg-brand-500 text-white hover:bg-brand-400 focus-visible:ring-brand-500 focus-visible:ring-offset-slate-900'
                      : 'border-2 border-slate-200 bg-white text-slate-800 hover:border-slate-400 focus-visible:ring-slate-400'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Ticket Form */}
      <section id="ticket" className="py-24 scroll-mt-20" aria-labelledby="ticket-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <h2 id="ticket-heading" className="section-heading">
                Submit a Business Support Request
              </h2>
              <p className="section-subheading">
                Fill out the form and a Level1PC technician will respond promptly. For critical
                issues, call us directly at{' '}
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
                  {
                    icon: ShieldCheck,
                    text: 'Active plan members receive priority response',
                  },
                  {
                    icon: Zap,
                    text: 'Critical tickets receive same-day attention',
                  },
                  {
                    icon: Users,
                    text: 'You will hear from a real local technician',
                  },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50">
                      <Icon className="h-4 w-4 text-brand-600" aria-hidden="true" />
                    </div>
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <SupportTicketForm type="business" />
          </div>
        </div>
      </section>
    </>
  );
}
