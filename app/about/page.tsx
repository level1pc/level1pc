import type { Metadata } from 'next';
import {
  Star,
  Award,
  Clock,
  MapPin,
  Users,
  Shield,
  Heart,
  ThumbsUp,
  CheckCircle,
  Quote,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Level1PC — Trusted IT Support in Brockport Since 2011',
  description:
    'Learn about Level1PC, a locally owned IT service company serving Brockport, NY and Monroe County since 2011. Read verified customer reviews and see why thousands trust us for computer repair.',
  alternates: { canonical: '/about' },
};

const milestones = [
  {
    year: '2011',
    title: 'Founded in Brockport',
    description:
      'Level1PC opened its doors in Brockport, NY with a simple mission: provide honest, skilled IT support to the local community at a fair price.',
  },
  {
    year: '2013',
    title: 'Expanded to Business Services',
    description:
      'Growing demand from local small businesses led us to formalize our managed IT service offerings, serving companies throughout Monroe County.',
  },
  {
    year: '2016',
    title: 'Launched Remote Support',
    description:
      'We introduced secure remote desktop support, enabling faster resolution for software issues without requiring a home or office visit.',
  },
  {
    year: '2019',
    title: 'Cloud & Security Practice',
    description:
      'As cyber threats escalated, we invested heavily in enterprise-grade security tools and cloud backup solutions for both business and residential clients.',
  },
  {
    year: '2023',
    title: '2,000+ Clients Served',
    description:
      'A milestone decade-plus of service. Over 2,000 satisfied clients across Brockport, Spencerport, Rochester, and the broader Monroe County region.',
  },
];

const values = [
  {
    icon: Shield,
    title: 'Honesty First',
    description:
      'We never upsell unnecessary services. If your device cannot be repaired cost-effectively, we tell you — and we charge nothing.',
  },
  {
    icon: Heart,
    title: 'Community Roots',
    description:
      'We live and work in Brockport. This is our community too. Supporting local residents and businesses is not just our job — it is personal.',
  },
  {
    icon: ThumbsUp,
    title: 'Quality Craftsmanship',
    description:
      'We do not cut corners. Every repair is done properly the first time, with quality components and thorough testing before handoff.',
  },
  {
    icon: Users,
    title: 'Client Relationships',
    description:
      'We build long-term relationships, not transactions. Our best clients have been with us since 2011, and we treat every new client like family.',
  },
];

const testimonials = [
  {
    quote:
      'My laptop was completely taken over by ransomware. I thought I lost everything. Level1PC removed the infection, recovered all my files, and had it back to me the next day. Absolutely exceptional.',
    author: 'Patricia L.',
    location: 'Brockport, NY',
    service: 'Virus & Ransomware Removal',
    rating: 5,
  },
  {
    quote:
      'They manage all the IT for my dental practice. Network, workstations, backups — everything just works. I have not had a serious outage in three years. Worth every penny.',
    author: 'Dr. Robert M.',
    location: 'Brockport, NY',
    service: 'Managed IT Services',
    rating: 5,
  },
  {
    quote:
      'I called at 8 AM on a Monday when our office server went down. By noon, everything was restored from backup and running. That kind of response time is extraordinary.',
    author: 'Karen B.',
    location: 'Spencerport, NY',
    service: 'Cloud Backup & Recovery',
    rating: 5,
  },
  {
    quote:
      'Most honest tech person I have ever dealt with. He looked at my old laptop, told me it was not worth repairing given the age, and helped me set up a new one at no charge for the consultation.',
    author: 'Frank D.',
    location: 'Brockport, NY',
    service: 'Residential Consultation',
    rating: 5,
  },
  {
    quote:
      'We had been battling a slow network for months. Level1PC came in, diagnosed the issue in under an hour, replaced a failing switch, and our speeds tripled. Highly recommend to any business.',
    author: 'Amanda C.',
    location: 'Rochester, NY',
    service: 'Network Infrastructure',
    rating: 5,
  },
  {
    quote:
      'My home Wi-Fi was terrible — dead zones everywhere. They installed a mesh system, configured everything securely, and walked me through parental controls. My kids can no longer bypass the filters!',
    author: 'James & Lisa T.',
    location: 'Hamlin, NY',
    service: 'Home Wi-Fi Setup',
    rating: 5,
  },
  {
    quote:
      'Brought in a PC with a failing hard drive. They recovered 100% of my photos and documents, transferred everything to a new SSD, and the machine is faster than ever. Incredible work.',
    author: 'Nancy G.',
    location: 'Hilton, NY',
    service: 'Data Recovery & Upgrade',
    rating: 5,
  },
  {
    quote:
      'Our small manufacturing shop runs on tight margins. Level1PC set us up with a proactive maintenance plan that has prevented costly downtime. Real ROI for a small business like ours.',
    author: 'Mike S.',
    location: 'Brockport, NY',
    service: 'Business Maintenance Plan',
    rating: 5,
  },
  {
    quote:
      'I am not tech-savvy at all. They explained everything in plain language, never talked down to me, and fixed my computer the same day I called. That personal touch is rare these days.',
    author: 'Eleanor P.',
    location: 'Brockport, NY',
    service: 'Residential Repair',
    rating: 5,
  },
];

const satisfactionMetrics = [
  { label: 'Overall Satisfaction', value: 98, suffix: '%' },
  { label: 'Would Recommend', value: 97, suffix: '%' },
  { label: 'On-Time Service', value: 99, suffix: '%' },
  { label: 'Issues Resolved', value: 96, suffix: '%' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-[#0f172a] pt-20"
        aria-labelledby="about-hero-heading"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-brand-500/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[300px] w-[400px] rounded-full bg-blue-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              id="about-hero-heading"
              className="text-4xl font-extrabold leading-tight text-white sm:text-5xl"
            >
              Brockport&apos;s Most Trusted{' '}
              <span className="text-brand-400">IT Support Partner</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Since 2011, Level1PC has been the go-to technology partner for residents and
              businesses throughout Brockport, NY and Monroe County. We are locally owned, community
              driven, and committed to delivering expert IT support with genuine personal care.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {[
                { icon: MapPin, text: 'Brockport, NY' },
                { icon: Clock, text: 'Since 2011' },
                { icon: Award, text: '15+ Years Experience' },
                { icon: Users, text: '2,000+ Clients' },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300"
                >
                  <Icon className="h-4 w-4 text-brand-400" aria-hidden="true" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-white"
          aria-hidden="true"
        />
      </section>

      {/* Our Story */}
      <section className="py-24" aria-labelledby="story-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 id="story-heading" className="section-heading">
                Our Story
              </h2>
              <div className="mt-6 space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Level1PC was founded in 2011 in the village of Brockport, New York by a
                  technician who was tired of watching local residents and small business owners get
                  overcharged and underserved by distant tech chains and big-box stores.
                </p>
                <p>
                  The founding principle was straightforward: treat every client with respect,
                  diagnose problems thoroughly, explain everything in plain language, charge a fair
                  price, and stand behind the work with our no-fix, no-fee guarantee.
                </p>
                <p>
                  More than a decade later, that philosophy has not changed — it has simply grown.
                  What started as a one-person operation has expanded into a full-service IT company
                  serving residential clients, small businesses, medical offices, and nonprofits
                  across Monroe County and Western New York.
                </p>
                <p>
                  We are proud to be a fixture in the Brockport community and to have earned the
                  trust of over 2,000 clients who depend on us to keep their technology running
                  reliably every day.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <ol className="relative space-y-6 border-l-2 border-slate-200 pl-8" role="list">
                {milestones.map((milestone, i) => (
                  <li key={milestone.year} className="relative">
                    <div
                      className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-[#0f172a] ring-4 ring-white text-xs font-bold text-brand-400"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </div>
                    <time
                      dateTime={milestone.year}
                      className="mb-1 block text-xs font-semibold uppercase tracking-wider text-brand-600"
                    >
                      {milestone.year}
                    </time>
                    <h3 className="mb-1 font-semibold text-slate-900">{milestone.title}</h3>
                    <p className="text-sm text-slate-500">{milestone.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-24" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 id="values-heading" className="section-heading">
              What We Stand For
            </h2>
            <p className="section-subheading">
              These are the principles that guide every interaction, every repair, and every
              business relationship we build.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card-service text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 ring-1 ring-brand-100">
                  <Icon className="h-7 w-7 text-brand-600" aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-semibold text-slate-900">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Satisfaction Metrics */}
      <section className="bg-[#0f172a] py-20" aria-labelledby="metrics-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="metrics-heading"
            className="mb-12 text-center text-2xl font-bold text-white sm:text-3xl"
          >
            By the Numbers
          </h2>
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {satisfactionMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <dd className="text-5xl font-extrabold text-brand-400">
                  {metric.value}
                  <span className="text-3xl">{metric.suffix}</span>
                </dd>
                <dt className="mt-2 text-sm font-medium text-slate-400">{metric.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 scroll-mt-20" aria-labelledby="reviews-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 id="reviews-heading" className="section-heading">
              Customer Reviews
            </h2>
            <p className="section-subheading">
              Authentic feedback from real Level1PC clients throughout the Brockport and Monroe
              County community.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100"
              >
                <Quote
                  className="mb-4 h-6 w-6 text-brand-200"
                  aria-hidden="true"
                />
                <div className="mb-3 flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="grow">
                  <p className="text-sm leading-relaxed text-slate-600">&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 border-t border-slate-100 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 ring-1 ring-brand-100">
                      <span className="text-sm font-semibold text-brand-700" aria-hidden="true">
                        {t.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{t.author}</p>
                      <p className="text-xs text-slate-500">{t.location}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
                      <CheckCircle className="h-3 w-3" aria-hidden="true" />
                      {t.service}
                    </span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
