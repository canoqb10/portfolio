"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  Rocket,
  Building2,
  Code2,
  Cloud,
  Terminal,
} from "lucide-react";
import { FadeIn, SectionHeader } from "@/components/ui";
import { useTranslation } from "@/i18n/context";
import { useTheme } from "@/theme/context";
import { achievements } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  calendar: Calendar,
  rocket: Rocket,
  building2: Building2,
  code2: Code2,
  cloud: Cloud,
  terminal: Terminal,
};

const darkColors = [
  { bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.2)", icon: "var(--color-primary-light)" },
  { bg: "rgba(34,211,238,0.08)", border: "rgba(34,211,238,0.2)", icon: "var(--color-secondary)" },
  { bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)", icon: "var(--color-accent-light)" },
  { bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)", icon: "#6EE7B7" },
  { bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)", icon: "#FDE68A" },
  { bg: "rgba(236,72,153,0.08)", border: "rgba(236,72,153,0.2)", icon: "#FBCFE8" },
];

const lightColors = [
  { bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.2)", icon: "var(--color-primary-dark)" },
  { bg: "rgba(34,211,238,0.08)", border: "rgba(34,211,238,0.2)", icon: "var(--color-secondary-dark)" },
  { bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)", icon: "var(--color-accent-dark)" },
  { bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)", icon: "#065F46" },
  { bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)", icon: "#92400E" },
  { bg: "rgba(236,72,153,0.08)", border: "rgba(236,72,153,0.2)", icon: "#831843" },
];

function AchievementCard({
  value,
  label,
  description,
  icon,
  colorStyle,
  delay,
}: Readonly<{
  value: string;
  label: string;
  description: string;
  icon: string;
  colorStyle: (typeof darkColors)[0];
  delay: number;
}>) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const Icon = iconMap[icon] ?? Calendar;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="glass-card-hover p-6 flex flex-col gap-4"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ background: colorStyle.bg, border: `1px solid ${colorStyle.border}` }}
      >
        <Icon size={20} style={{ color: colorStyle.icon }} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-4xl font-bold font-heading" style={{ color: colorStyle.icon }}>
          {value}
        </span>
        <span className="font-semibold text-text-primary text-sm">{label}</span>
        <span className="text-xs text-text-muted leading-relaxed">{description}</span>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  const { t, lang } = useTranslation();
  const { theme } = useTheme();
  const colors = theme === "dark" ? darkColors : lightColors;

  return (
    <section className="section-padding relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.achievements.eyebrow}
          title={t.achievements.title}
          titleHighlight={t.achievements.titleHighlight}
          description={t.achievements.description}
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <AchievementCard
              key={item.label.en}
              value={item.value}
              label={item.label[lang]}
              description={item.description[lang]}
              icon={item.icon}
              colorStyle={colors[i % colors.length]}
              delay={i * 0.08}
            />
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-14">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-medium text-text-secondary leading-relaxed italic">
              &ldquo;{t.achievements.quote}&rdquo;
            </blockquote>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-border-soft" />
              <span className="text-sm text-text-muted">José Alberto Cano Govea</span>
              <div className="h-px w-12 bg-border-soft" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
