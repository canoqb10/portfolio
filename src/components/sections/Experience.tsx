"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { FadeIn, Badge, SectionHeader } from "@/components/ui";
import { useTranslation } from "@/i18n/context";
import { useTheme } from "@/theme/context";
import { experience } from "@/data/portfolio";

function ExperienceCard({
  item,
  index,
  expanded,
  onToggle,
}: Readonly<{
  item: (typeof experience)[0];
  index: number;
  expanded: boolean;
  onToggle: () => void;
}>) {
  const { t, lang } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <FadeIn direction="left" delay={index * 0.1}>
      <div className="relative pl-8">
        {/* Timeline dot */}
        <div
          className={`absolute left-0 top-5 w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 ${
            item.current
              ? "bg-primary border-primary-light shadow-[0_0_12px_var(--color-primary)]"
              : "bg-bg-elevated border-border-soft"
          }`}
        />

        <button
          onClick={onToggle}
          className="w-full text-left"
          aria-expanded={expanded}
        >
          <div
            className={`glass-card-hover p-6 transition-all duration-300 ${
              expanded ? "border-primary/20 bg-primary/4" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg font-bold text-text-primary font-heading">
                    {item.role[lang]}
                  </h3>
                  {item.current && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border ${
                      isDark
                        ? "bg-[rgba(16,185,129,0.15)] text-[#6EE7B7] border-[rgba(16,185,129,0.25)]"
                        : "bg-[#059669] text-white border-[#047857]"
                    }`}>
                      {t.experience.current}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="font-semibold text-primary-light">{item.company}</span>
                  <span className="flex items-center gap-1 text-text-muted">
                    <MapPin size={11} />
                    {item.location}
                  </span>
                </div>
                <span className="text-xs text-text-muted font-medium tracking-wide">
                  {item.period[lang]}
                </span>
              </div>

              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-text-muted mt-1 shrink-0"
              >
                <ChevronDown size={18} />
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {item.technologies.slice(0, 6).map((tech) => (
                <Badge key={tech} label={tech} variant="badge-frontend" size="sm" />
              ))}
              {item.technologies.length > 6 && (
                <span className="px-2 py-0.5 rounded-full text-[10px] text-text-muted bg-white/4 border border-border-dim">
                  +{item.technologies.length - 6} more
                </span>
              )}
            </div>
          </div>
        </button>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="glass-card p-6 mt-1 border-t-0 rounded-t-none flex flex-col gap-5">
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description[lang]}
                </p>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-3">
                    {t.experience.keyAchievements}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {item.achievements[lang].map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-text-secondary">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-3">
                    {t.experience.technologies}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <Badge key={tech} label={tech} variant="badge-frontend" size="sm" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

export default function Experience() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="section-padding relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent 0%, rgba(13,13,30,0.5) 50%, transparent 100%)" }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          titleHighlight={t.experience.titleHighlight}
          description={t.experience.description}
          align="center"
          className="mb-14"
        />

        <div className="relative">
          <div className="absolute left-1.75 top-6 bottom-6 w-0.5 bg-linear-to-b from-transparent via-border-soft to-transparent pointer-events-none" />
          <div className="flex flex-col gap-5">
            {experience.map((item, index) => (
              <ExperienceCard
                key={item.id}
                item={item}
                index={index}
                expanded={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
