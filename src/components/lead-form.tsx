"use client";

import { FormEvent, useState } from "react";

type SubmissionState =
  | { status: "idle"; message: "" }
  | { status: "loading"; message: "Sending..." }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function LeadForm() {
  const [state, setState] = useState<SubmissionState>({ status: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setState({ status: "loading", message: "Sending..." });

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    });

    const result = (await response.json()) as { message?: string };

    if (!response.ok) {
      setState({
        status: "error",
        message:
          result.message ??
          "The lead endpoint is not available. Please email hello@streamforge.ai directly.",
      });
      return;
    }

    form.reset();
    setState({
      status: "success",
      message:
        result.message ??
        "Thanks. Your request was received and will be reviewed for fit before a call is scheduled.",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-200">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
            placeholder="Your name"
          />
        </label>
        <label className="text-sm font-medium text-slate-200">
          Work email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
            placeholder="you@company.com"
          />
        </label>
        <label className="text-sm font-medium text-slate-200">
          Company
          <input
            required
            name="company"
            autoComplete="organization"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
            placeholder="Company name"
          />
        </label>
        <label className="text-sm font-medium text-slate-200">
          Budget range
          <select
            required
            name="budget"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
            defaultValue=""
          >
            <option value="" disabled>
              Select budget
            </option>
            <option>3,000 EUR audit</option>
            <option>12,000-25,000 EUR project</option>
            <option>60,000+ EUR implementation</option>
            <option>15,000+ EUR/month retainer</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-slate-200">
        What should the AI Delivery Stream improve?
        <textarea
          required
          name="message"
          rows={6}
          minLength={40}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
          placeholder="Describe your current delivery process, AI usage, product idea, workflow, agent need, or implementation challenge."
        />
      </label>

      <label className="sr-only">
        Leave this field empty
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <button
        type="submit"
        disabled={state.status === "loading"}
        className="mt-6 w-full rounded-full bg-cyan-300 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.status === "loading" ? "Sending..." : "Request audit review"}
      </button>

      {state.message ? (
        <p
          className={`mt-4 text-sm ${
            state.status === "error" ? "text-rose-300" : "text-cyan-100"
          }`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
