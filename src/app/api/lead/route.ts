import { NextResponse } from "next/server";

const maxLengths = {
  name: 120,
  email: 180,
  company: 160,
  budget: 80,
  message: 4000,
};

type LeadRequest = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  budget?: unknown;
  message?: unknown;
  website?: unknown;
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadRequest;

  if (text(payload.website)) {
    return NextResponse.json({ message: "Request received." });
  }

  const lead = {
    name: text(payload.name).slice(0, maxLengths.name),
    email: text(payload.email).slice(0, maxLengths.email),
    company: text(payload.company).slice(0, maxLengths.company),
    budget: text(payload.budget).slice(0, maxLengths.budget),
    message: text(payload.message).slice(0, maxLengths.message),
  };

  if (!lead.name || !lead.company || !lead.budget || lead.message.length < 40 || !isValidEmail(lead.email)) {
    return NextResponse.json(
      { message: "Please provide a valid name, work email, company, budget and project description." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      {
        message:
          "Lead capture is not configured yet. Please email hello@streamforge.ai directly.",
      },
      { status: 503 },
    );
  }

  const webhookResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...lead,
      source: "streamforge.ai",
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!webhookResponse.ok) {
    return NextResponse.json(
      { message: "Lead capture failed. Please email hello@streamforge.ai directly." },
      { status: 502 },
    );
  }

  return NextResponse.json(
    {
      message:
        "Thanks. Your request was received and will be reviewed for fit before a call is scheduled.",
    },
    { status: 201 },
  );
}
