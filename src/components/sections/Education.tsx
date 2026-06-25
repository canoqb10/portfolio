"use client";

import { GraduationCap, Award, Cloud, Layers } from "lucide-react";
import { FadeIn, SectionHeader } from "@/components/ui";
import { useTranslation } from "@/i18n/context";
import type { Lang } from "@/i18n/context";
import { useTheme } from "@/theme/context";
import { education, certifications } from "@/data/portfolio";

const certIconMap: Record<string, React.ElementType> = {
  cloud: Cloud,
  layers: Layers,
};

function resolveField(field: string | { en: string; es: string }, lang: Lang): string {
  return typeof field === "string" ? field : field[lang];
}

export default function Education() {
  const { t, lang } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.education.eyebrow}
          title={t.education.title}
          titleHighlight={t.education.titleHighlight}
          description={t.education.description}
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <FadeIn direction="left">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  isDark
                    ? "bg-[rgba(99,102,241,0.12)] border border-primary-glow"
                    : "bg-[#4F46E5] border border-[#3730A3]"
                }`}>
                  <GraduationCap size={15} className={isDark ? "text-[#C7D2FE]" : "text-white"} />
                </div>
                <p className="text-xs font-bold tracking-widest uppercase text-text-muted">
                  {t.education.academicLabel}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {education.map((item) => (
                  <div key={item.institution} className="glass-card-hover p-5 flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-bold text-text-primary text-sm font-heading">
                          {item.degree[lang]}
                        </p>
                        <p className="text-xs text-primary-light font-semibold mt-0.5">
                          {item.institution}
                        </p>
                      </div>
                      <span className="text-xs text-text-muted font-medium shrink-0 mt-0.5">
                        {item.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Certifications */}
          <FadeIn direction="right">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  isDark
                    ? "bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)]"
                    : "bg-[#B45309] border border-[#92400E]"
                }`}>
                  <Award size={15} className={isDark ? "text-[#FDE68A]" : "text-white"} />
                </div>
                <p className="text-xs font-bold tracking-widest uppercase text-text-muted">
                  {t.education.certsLabel}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {certifications.map((cert) => {
                  const Icon = certIconMap[cert.icon] ?? Award;
                  const isAws = resolveField(cert.issuer, lang).toLowerCase().includes("amazon");
                  const certIconBox = isDark
                    ? isAws
                      ? "bg-[rgba(245,158,11,0.1)] border-[rgba(245,158,11,0.2)]"
                      : "bg-[rgba(99,102,241,0.1)] border-primary-glow"
                    : isAws
                      ? "bg-[#B45309] border-[#92400E]"
                      : "bg-primary-dark border-[#3730A3]";
                  const certIconColor = isDark
                    ? isAws ? "text-[#FDE68A]" : "text-[#C7D2FE]"
                    : "text-white";
                  return (
                    <div key={cert.name.en} className="glass-card-hover p-5 flex flex-col gap-3">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${certIconBox}`}>
                          <Icon size={16} className={certIconColor} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-text-primary text-sm font-heading">
                            {cert.name[lang]}
                          </p>
                          <p className="text-xs text-text-muted mt-0.5">
                            {resolveField(cert.issuer, lang)}
                          </p>
                        </div>
                        <span className="text-xs text-text-muted font-medium shrink-0">
                          {resolveField(cert.period, lang)}
                        </span>
                      </div>
                      {isAws && (
                        <div className="flex items-center gap-1.5">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${
                            isDark
                              ? "bg-[rgba(245,158,11,0.12)] text-[#FDE68A] border-[rgba(245,158,11,0.2)]"
                              : "bg-[#B45309] text-white border-[#92400E]"
                          }`}>
                            {t.education.verified}
                          </span>
                          <span className="text-[10px] text-text-muted">
                            {resolveField(cert.issuer, lang)}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-primary-glow border border-[rgba(99,102,241,0.15)] mt-2">
                <p className="text-xs text-text-secondary leading-relaxed">
                  <span className="text-primary-light font-semibold">{t.education.continuousTitle}</span>{" "}
                  — {t.education.continuousText}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
