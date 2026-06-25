"use client";

import {
  Monitor,
  Server,
  Database,
  CheckCircle,
  Cloud,
  Layers,
  Wrench,
  Cpu,
} from "lucide-react";
import { FadeIn, Badge, SectionHeader } from "@/components/ui";
import { useTranslation } from "@/i18n/context";
import { useTheme } from "@/theme/context";
import { skills, softSkills } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  monitor: Monitor,
  server: Server,
  database: Database,
  "check-circle": CheckCircle,
  cloud: Cloud,
  layers: Layers,
  wrench: Wrench,
  cpu: Cpu,
};

const darkIconColors: Record<string, string> = {
  "badge-frontend": "text-[#C7D2FE] bg-[rgba(99,102,241,0.12)]",
  "badge-backend": "text-[#A5F3FC] bg-[rgba(34,211,238,0.1)]",
  "badge-database": "text-[#DDD6FE] bg-[rgba(167,139,250,0.1)]",
  "badge-testing": "text-[#FDE68A] bg-[rgba(245,158,11,0.1)]",
  "badge-devops": "text-[#A7F3D0] bg-[rgba(16,185,129,0.1)]",
  "badge-tools": "text-[#FBCFE8] bg-[rgba(236,72,153,0.1)]",
  "badge-soft": "text-[#FDA4AF] bg-[rgba(244,63,94,0.1)]",
  "badge-default": "text-[#C8C8E0] bg-[rgba(255,255,255,0.05)]",
};

const lightIconColors: Record<string, string> = {
  "badge-frontend": "text-white bg-[#4F46E5]",
  "badge-backend": "text-white bg-[#0891B2]",
  "badge-database": "text-white bg-[#7C3AED]",
  "badge-testing": "text-white bg-[#B45309]",
  "badge-devops": "text-white bg-[#059669]",
  "badge-tools": "text-white bg-[#BE185D]",
  "badge-soft": "text-white bg-[#E11D48]",
  "badge-default": "text-white bg-[#475569]",
};

export default function Skills() {
  const { t, lang } = useTranslation();
  const { theme } = useTheme();
  const iconColors = theme === "dark" ? darkIconColors : lightIconColors;

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          titleHighlight={t.skills.titleHighlight}
          description={t.skills.description}
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skills.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Monitor;
            const iconStyle =
              iconColors[group.badgeClass] ?? iconColors["badge-default"];

            return (
              <FadeIn key={group.icon} delay={i * 0.06} direction="up">
                <div className="glass-card-hover p-5 flex flex-col gap-4 h-full">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconStyle}`}
                    >
                      <Icon size={16} />
                    </div>
                    <span className="text-sm font-semibold text-text-primary">
                      {group.category[lang]}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <Badge
                        key={item}
                        label={item}
                        variant={group.badgeClass}
                        size="sm"
                      />
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Soft skills */}
        <FadeIn direction="up" delay={0.1} className="mt-10">
          <div className="glass-card p-6 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconColors["badge-soft"] ?? iconColors["badge-default"]}`}>
                <Wrench size={16} />
              </div>
              <span className="text-sm font-semibold text-text-primary">
                {t.skills.softTitle}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills[lang].map((skill) => (
                <Badge key={skill} label={skill} variant="badge-soft" size="sm" />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
