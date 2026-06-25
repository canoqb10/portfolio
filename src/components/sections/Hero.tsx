"use client";

import { motion, type Variants } from "framer-motion";
import { Download, Mail, MapPin, ArrowDown } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui";
import { useTranslation } from "@/i18n/context";
import { useTheme } from "@/theme/context";
import { personalInfo } from "@/data/portfolio";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Hero() {
  const { t, lang } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden animated-gradient">
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 w-175 h-175 rounded-full opacity-[0.07] blur-[120px] pointer-events-none"
        style={{ background: "var(--color-primary)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 w-150 h-150 rounded-full opacity-[0.06] blur-[120px] pointer-events-none"
        style={{ background: "var(--color-secondary)" }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-225 rounded-full opacity-[0.03] blur-[160px] pointer-events-none"
        style={{ background: "var(--color-accent)" }}
      />

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-24 pb-16 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants}>
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)] ${isDark ? "text-[#6EE7B7]" : "text-[#065F46]"}`}
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_#10B981]" />
              {personalInfo.availability[lang]}
            </span>
          </motion.div>

          <div className="flex row justify-center items-center gap-12 flex-wrap">
            {/* Avatar */}
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-linear-to-br from-primary via-accent to-secondary p-0.75 shadow-xl">
                  <div className="w-full h-full rounded-full bg-bg-elevated flex items-center justify-center overflow-hidden">
                    <span className="font-heading font-bold text-4xl text-text-primary select-none">
                      {personalInfo.wordmark}
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                  <span className="text-bg-base text-xs font-bold">✓</span>
                </div>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none tracking-tight">
                <span className="text-text-primary">
                  {personalInfo.firstName}{" "}
                </span>
                <span className="gradient-text">{personalInfo.middleName}</span>
                <br />
                <span className="text-text-primary">
                  {personalInfo.lastName}
                </span>
              </h1>
            </motion.div>
          </div>
          {/* Title + location */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <span className="text-lg sm:text-xl font-semibold text-primary-light">
                {personalInfo.title[lang]}
              </span>
              <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border-soft" />
              <span className="flex items-center gap-1.5 text-sm text-text-muted">
                <MapPin size={13} />
                {personalInfo.location}
              </span>
            </div>
          </motion.div>

          {/* Intro */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed"
          >
            {personalInfo.introShort[lang]}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mt-2"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-primary hover:bg-primary-light text-white transition-all duration-200 shadow-lg hover:shadow-[0_0_35px_rgba(99,102,241,0.45)] hover:scale-105 active:scale-95"
            >
              <Mail size={15} />
              {t.hero.contact}
            </a>
            <a
              href={personalInfo.cvUrl}
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-border-soft hover:border-primary text-text-secondary hover:text-primary-light transition-all duration-200 hover:bg-primary-glow hover:scale-105 active:scale-95"
            >
              <Download size={15} />
              {t.hero.downloadCv}
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2"
          >
            {[
              {
                icon: LinkedinIcon,
                href: personalInfo.linkedin,
                label: "LinkedIn",
              },
              { icon: GithubIcon, href: personalInfo.github, label: "GitHub" },
              {
                icon: Mail,
                href: `mailto:${personalInfo.email}`,
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-text-muted hover:text-primary-light bg-white/4 hover:bg-primary-glow border border-border-dim hover:border-primary/30 transition-all duration-200 hover:scale-110 active:scale-95"
              >
                <Icon style={{ width: 16, height: 16 }} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-widest uppercase text-text-muted">
            {t.hero.scroll}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={14} className="text-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
