type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, body, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.28em] text-stone-500">{eyebrow}</p>
      ) : null}
      <h2 className="text-4xl font-semibold tracking-[-0.04em] text-stone-950 sm:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-lg leading-8 text-stone-700">{body}</p> : null}
    </div>
  );
}
