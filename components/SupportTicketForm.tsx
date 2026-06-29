"use client";

import { useState } from "react";
import { CheckCircle, ChevronRight, ChevronLeft, Send, Loader2 } from "lucide-react";

type TicketType = "business" | "residential";

interface FormData {
  maintenanceType: string;
  priorityType: string;
  name: string;
  businessName: string;
  phone: string;
  email: string;
  message: string;
}

interface Props {
  type: TicketType;
}

const maintenanceOptions = [
  {
    value: "active-plan",
    label: "Active Maintenance Plan",
    description: "I currently have a managed service agreement with Level1PC.",
  },
  {
    value: "no-maintenance",
    label: "No Maintenance Plan",
    description: "I am a new client or do not have a current plan.",
  },
];

const priorityOptions = [
  {
    value: "low",
    label: "Low",
    color: "text-green-600",
    bg: "bg-green-50",
    ring: "ring-green-200",
    activeBg: "bg-green-500",
    description: "No immediate impact — issue can wait a few days.",
  },
  {
    value: "normal",
    label: "Normal",
    color: "text-blue-600",
    bg: "bg-blue-50",
    ring: "ring-blue-200",
    activeBg: "bg-blue-500",
    description: "Minor disruption — I can work around it for now.",
  },
  {
    value: "high",
    label: "High",
    color: "text-amber-600",
    bg: "bg-amber-50",
    ring: "ring-amber-200",
    activeBg: "bg-amber-500",
    description: "Significant impact — affecting productivity.",
  },
  {
    value: "critical",
    label: "Critical",
    color: "text-red-600",
    bg: "bg-red-50",
    ring: "ring-red-200",
    activeBg: "bg-red-500",
    description: "System down — complete work stoppage.",
  },
];

const STEPS = ["Maintenance", "Priority", "Your Info"];

export default function SupportTicketForm({ type }: Props) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormData>({
    maintenanceType: "",
    priorityType: "",
    name: "",
    businessName: "",
    phone: "",
    email: "",
    message: "",
  });

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const canAdvance = () => {
    if (step === 0) return !!form.maintenanceType;
    if (step === 1) return !!form.priorityType;
    if (step === 2)
      return !!(form.name && form.phone && form.email && form.message);
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canAdvance()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-12 text-center shadow-sm ring-1 ring-slate-100">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-100">
          <CheckCircle className="h-8 w-8 text-brand-600" aria-hidden="true" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-slate-900">Request Submitted!</h3>
        <p className="max-w-sm text-slate-500">
          Thank you{form.name ? `, ${form.name}` : ""}. We have received your support request and
          will reach out to{" "}
          <span className="font-medium text-slate-700">{form.email || form.phone}</span> shortly.
          For urgent issues, call{" "}
          <a
            href="tel:5856323030"
            className="font-semibold text-brand-600 hover:underline focus-visible:outline-none focus-visible:underline"
          >
            (585) 632-3030
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 overflow-hidden">
      {/* Step indicator */}
      <div className="border-b border-slate-100 bg-slate-50 px-8 py-5">
        <nav aria-label="Form progress" className="flex items-center gap-0">
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center">
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                    i < step
                      ? "bg-brand-500 text-white"
                      : i === step
                      ? "bg-[#0f172a] text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                  aria-current={i === step ? "step" : undefined}
                >
                  {i < step ? <CheckCircle className="h-4 w-4" aria-hidden="true" /> : i + 1}
                </div>
                <span
                  className={`text-sm font-medium ${
                    i === step ? "text-slate-900" : i < step ? "text-brand-600" : "text-slate-400"
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`mx-3 h-px w-8 transition-colors ${
                    i < step ? "bg-brand-400" : "bg-slate-200"
                  }`}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </nav>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="p-8">
          {/* Step 0: Maintenance Type */}
          {step === 0 && (
            <fieldset>
              <legend className="mb-6 text-lg font-semibold text-slate-900">
                Do you have an active maintenance plan?
              </legend>
              <div className="grid gap-4 sm:grid-cols-2">
                {maintenanceOptions.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex cursor-pointer flex-col gap-1 rounded-xl border-2 p-5 transition-all ${
                      form.maintenanceType === opt.value
                        ? "border-brand-500 bg-brand-50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="maintenanceType"
                      value={opt.value}
                      checked={form.maintenanceType === opt.value}
                      onChange={(e) => update("maintenanceType", e.target.value)}
                      className="sr-only"
                      aria-label={opt.label}
                    />
                    <span className="font-semibold text-slate-900">{opt.label}</span>
                    <span className="text-sm text-slate-500">{opt.description}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          {/* Step 1: Priority */}
          {step === 1 && (
            <fieldset>
              <legend className="mb-6 text-lg font-semibold text-slate-900">
                What is the priority level of this issue?
              </legend>
              <div className="grid gap-4 sm:grid-cols-2">
                {priorityOptions.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex cursor-pointer flex-col gap-1 rounded-xl border-2 p-5 transition-all ${
                      form.priorityType === opt.value
                        ? `border-current ${opt.color} bg-opacity-5`
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                    style={
                      form.priorityType === opt.value
                        ? { borderColor: "currentColor" }
                        : {}
                    }
                  >
                    <input
                      type="radio"
                      name="priorityType"
                      value={opt.value}
                      checked={form.priorityType === opt.value}
                      onChange={(e) => update("priorityType", e.target.value)}
                      className="sr-only"
                      aria-label={opt.label}
                    />
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-block h-2.5 w-2.5 rounded-full ${
                          form.priorityType === opt.value ? opt.activeBg : opt.bg
                        }`}
                        aria-hidden="true"
                      />
                      <span className={`font-semibold ${opt.color}`}>{opt.label}</span>
                    </div>
                    <span className="text-sm text-slate-500">{opt.description}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          {/* Step 2: Contact info */}
          {step === 2 && (
            <div className="space-y-5">
              <h3 className="text-lg font-semibold text-slate-900">Your Contact Information</h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="ticket-name"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Full Name <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="ticket-name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Jane Smith"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
                {type === "business" && (
                  <div>
                    <label
                      htmlFor="ticket-business"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Business / Organization Name
                    </label>
                    <input
                      id="ticket-business"
                      type="text"
                      autoComplete="organization"
                      value={form.businessName}
                      onChange={(e) => update("businessName", e.target.value)}
                      placeholder="Acme Corp"
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                    />
                  </div>
                )}
                <div>
                  <label
                    htmlFor="ticket-phone"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Phone Number <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="ticket-phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="(585) 000-0000"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="ticket-email"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Email Address <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="ticket-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="ticket-message"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Describe Your Issue <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="ticket-message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Please describe what is happening, when it started, and any error messages you have seen..."
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 resize-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-8 py-5">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            Back
          </button>

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canAdvance()}
              className="flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              Continue
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!canAdvance() || submitting}
              className="flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Submit Request
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
