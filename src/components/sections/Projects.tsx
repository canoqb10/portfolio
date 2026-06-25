"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeIn, Badge, SectionHeader } from "@/components/ui";
import { useTranslation } from "@/i18n/context";
import { useTheme } from "@/theme/context";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const { t, lang } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const featured = projects.filter((p) => p.highlight);
  const others = projects.filter((p) => !p.highlight);

  return (
    <section id="projects" className="section-padding relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 80% 50%, rgba(34,211,238,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          titleHighlight={t.projects.titleHighlight}
          description={t.projects.description}
          align="center"
          className="mb-14"
        />

        {/* Featured projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {featured.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1} direction="up">
              <motion.div
                className="glass-card-hover p-6 flex flex-col gap-5 h-full cursor-default"
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">
                      {project.category[lang]}
                    </span>
                    <h3 className="text-lg font-bold text-text-primary font-heading leading-tight">
                      {project.title[lang]}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ x: hoveredId === project.id ? 2 : 0, opacity: hoveredId === project.id ? 1 : 0.3 }}
                    className="text-primary-light shrink-0 mt-1"
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="text-primary-light font-semibold">{project.company}</span>
                  <span className="text-border-soft">·</span>
                  <span className="text-text-muted">{project.period}</span>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed flex-1">
                  {project.description[lang]}
                </p>

                <div className="flex flex-col gap-3 p-4 rounded-xl bg-white/2 border border-border-dim">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-text-muted mb-1">
                      {t.projects.problemLabel}
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {project.problem[lang]}
                    </p>
                  </div>
                  <div className="h-px bg-border-dim" />
                  <div>
                    <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${isDark ? "text-[#6EE7B7]" : "text-[#065F46]"}`}>
                      {t.projects.impactLabel}
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {project.impact[lang]}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} label={tech} variant="badge-frontend" size="sm" />
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <div>
            <FadeIn delay={0.3}>
              <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-5">
                {t.projects.othersLabel}
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {others.map((project, i) => (
                <FadeIn key={project.id} delay={0.35 + i * 0.08}>
                  <div className="glass-card-hover p-5 flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">
                          {project.category[lang]}
                        </span>
                        <h4 className="font-bold text-text-primary text-sm mt-0.5">
                          {project.title[lang]}
                        </h4>
                      </div>
                      <span className="text-xs text-primary-light font-semibold">
                        {project.company}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {project.description[lang]}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} label={tech} variant="badge-backend" size="sm" />
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[10px] text-text-muted px-2 py-0.5 rounded-full bg-white/3 border border-border-dim">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
