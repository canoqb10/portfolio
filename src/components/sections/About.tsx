"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Code2, Zap, Cloud } from "lucide-react";
import { FadeIn, SectionHeader } from "@/components/ui";
import { useTranslation } from "@/i18n/context";
import { personalInfo, stats, expertise, softSkills } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  layers: Layers,
  code2: Code2,
  zap: Zap,
  cloud: Cloud,
};

function StatCounter({ value, label }: Readonly<{ value: string; label: string }>) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: "backOut" }}
      className="flex flex-col items-center gap-1 text-center"
    >
      <span className="text-4xl font-bold gradient-text font-heading">{value}</span>
      <span className="text-xs text-text-muted font-medium uppercase tracking-wider">{label}</span>
    </motion.div>
  );
}

export default function About() {
  const { t, lang } = useTranslation();

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          titleHighlight={t.about.titleHighlight}
          description={t.about.description}
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <FadeIn direction="left">
              <div className="glass-card p-8 flex flex-col gap-5">
                <div className="w-12 h-1 rounded-full bg-linear-to-r from-primary to-secondary" />
                <p className="text-text-secondary leading-relaxed text-base whitespace-pre-line">
                  {personalInfo.intro[lang]}
                </p>
                <p className="text-text-secondary leading-relaxed text-base">
                  {t.about.currentRole}{" "}
                  <span className="text-primary-light font-medium">Smart Payments Solutions</span>
                  {", "}
                  {t.about.prevRole}{" "}
                  <span className="text-secondary font-medium">Mercado Libre</span>{" "}
                  — {t.about.latamDesc} —{" "}
                  {t.about.buildingMl}
                </p>
              </div>
            </FadeIn>

            {/* Soft skills */}
            <FadeIn direction="left" delay={0.1}>
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold tracking-widest uppercase text-text-muted">
                  {t.about.softSkillsLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {softSkills[lang].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-white/4 text-text-secondary border border-border-dim hover:border-border-soft transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — stats + expertise */}
          <div className="flex flex-col gap-6">
            <FadeIn direction="right">
              <div className="glass-card p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <StatCounter key={stat.value} value={stat.value} label={stat.label[lang]} />
                ))}
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((item, i) => {
                const Icon = iconMap[item.icon] ?? Layers;
                return (
                  <FadeIn key={item.icon} direction="right" delay={0.05 * (i + 1)}>
                    <div className="glass-card-hover p-5 flex flex-col gap-3 h-full">
                      <div className="w-10 h-10 rounded-xl bg-primary-glow border border-primary/20 flex items-center justify-center">
                        <Icon size={18} className="text-primary-light" />
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary text-sm mb-1">{item.title[lang]}</p>
                        <p className="text-xs text-text-muted leading-relaxed">{item.description[lang]}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
