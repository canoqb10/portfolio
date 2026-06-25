import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly titleHighlight?: string;
  readonly description?: string;
  readonly align?: "left" | "center";
  readonly className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignClasses} ${className}`}>
      {eyebrow && (
        <FadeIn delay={0.05}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary-glow text-primary-light border border-primary-glow">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {eyebrow}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
          {title}{" "}
          {titleHighlight && <span className="gradient-text">{titleHighlight}</span>}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.15}>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
