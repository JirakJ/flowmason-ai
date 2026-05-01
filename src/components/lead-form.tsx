"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

type SubmissionState =
  | { status: "idle"; message: "" }
  | { status: "success"; message: string };

export function LeadForm() {
  const [state, setState] = useState<SubmissionState>({ status: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("website")) {
      setState({ status: "success", message: "Request received." });
      return;
    }

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const budget = String(formData.get("budget") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = `FlowMason audit request from ${company}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Budget range: ${budget}`,
      "",
      "Project context:",
      message,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setState({
      status: "success",
      message: `Your email client should open now. If it does not, email ${siteConfig.email} directly.`,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="border border-stone-950 bg-[#fffaf0] p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-stone-800">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            className="mt-2 w-full border border-stone-300 bg-[#f5f0e6] px-4 py-3 text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-stone-950"
            placeholder="Your name"
          />
        </label>
        <label className="text-sm font-medium text-stone-800">
          Work email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="mt-2 w-full border border-stone-300 bg-[#f5f0e6] px-4 py-3 text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-stone-950"
            placeholder="you@company.com"
          />
        </label>
        <label className="text-sm font-medium text-stone-800">
          Company
          <input
            required
            name="company"
            autoComplete="organization"
            className="mt-2 w-full border border-stone-300 bg-[#f5f0e6] px-4 py-3 text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-stone-950"
            placeholder="Company name"
          />
        </label>
        <label className="text-sm font-medium text-stone-800">
          Budget range
          <select
            required
            name="budget"
            className="mt-2 w-full border border-stone-300 bg-[#f5f0e6] px-4 py-3 text-stone-950 outline-none transition focus:border-stone-950"
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

      <label className="mt-5 block text-sm font-medium text-stone-800">
        What workflow should we inspect?
        <textarea
          required
          name="message"
          rows={6}
          minLength={40}
          className="mt-2 w-full border border-stone-300 bg-[#f5f0e6] px-4 py-3 text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-stone-950"
          placeholder="Describe the current flow, who owns it, where time is lost, and what a useful outcome would look like."
        />
      </label>

      <label className="sr-only">
        Leave this field empty
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <button
        type="submit"
        className="mt-6 w-full border border-stone-950 bg-stone-950 px-6 py-4 text-sm font-bold text-stone-50 transition hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-2 focus:ring-offset-[#fffaf0]"
      >
        Send workflow for review
      </button>

      {state.message ? (
        <p className="mt-4 text-sm text-stone-700" role="status">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
