"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Clock } from "lucide-react";
import { LinkedinIcon, GithubIcon, FadeIn, SectionHeader } from "@/components/ui";
import { useTranslation } from "@/i18n/context";
import { useTheme } from "@/theme/context";
import { personalInfo } from "@/data/portfolio";

type FormState = "idle" | "sending" | "sent";

export default function Contact() {
  const { t, lang } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");

  const socialLinks = [
    {
      Icon: Mail,
      label: t.contact.socials.email,
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: isDark ? "rgba(99,102,241,0.12)" : "#4F46E5",
      border: isDark ? "rgba(99,102,241,0.2)" : "#3730A3",
      text: isDark ? "#C7D2FE" : "#FFFFFF",
    },
    {
      Icon: LinkedinIcon,
      label: t.contact.socials.linkedin,
      value: "José Alberto Cano Govea",
      href: personalInfo.linkedin,
      color: isDark ? "rgba(34,211,238,0.08)" : "#0891B2",
      border: isDark ? "rgba(34,211,238,0.2)" : "#0E7490",
      text: isDark ? "#A5F3FC" : "#FFFFFF",
    },
    {
      Icon: GithubIcon,
      label: t.contact.socials.github,
      value: "github.com/canoqb10",
      href: personalInfo.github,
      color: isDark ? "rgba(167,139,250,0.08)" : "#7C3AED",
      border: isDark ? "rgba(167,139,250,0.2)" : "#6D28D9",
      text: isDark ? "#DDD6FE" : "#FFFFFF",
    },
    {
      Icon: MapPin,
      label: t.contact.socials.location,
      value: personalInfo.location,
      href: null as string | null,
      color: isDark ? "rgba(16,185,129,0.08)" : "#059669",
      border: isDark ? "rgba(16,185,129,0.2)" : "#047857",
      text: isDark ? "#A7F3D0" : "#FFFFFF",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    const { name, email, subject, message } = form;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoHref = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject || "Portfolio Contact",
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoHref, "_blank");
    setTimeout(() => setFormState("sent"), 600);
  };

  const inputClass =
    "w-full bg-white/4 border border-border-dim rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-[rgba(99,102,241,0.3)] transition-all duration-200";

  const { form: f } = t.contact;

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/4 w-125 h-125 rounded-full opacity-[0.05] blur-[120px] pointer-events-none"
        style={{ background: "var(--color-primary)" }}
      />
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-100 h-100 rounded-full opacity-[0.04] blur-[100px] pointer-events-none"
        style={{ background: "var(--color-secondary)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          titleHighlight={t.contact.titleHighlight}
          description={t.contact.description}
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — info */}
          <div className="flex flex-col gap-6">
            <FadeIn direction="left">
              <div className="glass-card p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Clock size={14} className={isDark ? "text-[#6EE7B7]" : "text-[#065F46]"} />
                  <span className={`text-sm font-semibold ${isDark ? "text-[#6EE7B7]" : "text-[#065F46]"}`}>
                    {personalInfo.availability[lang]}
                  </span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {t.contact.roleSearch}
                </p>
              </div>
            </FadeIn>

            <div className="flex flex-col gap-3">
              {socialLinks.map(
                ({ Icon, label, value, href, color, border, text }, i) => {
                  const Wrapper = href ? "a" : "div";
                  const wrapperProps = href
                    ? {
                        href,
                        target: href.startsWith("http") ? "_blank" : undefined,
                        rel: href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined,
                      }
                    : {};

                  return (
                    <FadeIn key={label} direction="left" delay={i * 0.07}>
                      <Wrapper
                        {...wrapperProps}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${
                          href
                            ? "cursor-pointer hover:scale-[1.01] hover:shadow-lg"
                            : "cursor-default"
                        }`}
                        style={isDark
                          ? { background: color, borderColor: border }
                          : { background: "var(--color-bg-surface)", borderColor: border }
                        }
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{
                            background: color,
                            border: `1px solid ${border}`,
                          }}
                        >
                          <Icon
                            style={{ width: 16, height: 16, color: text }}
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold tracking-widest uppercase text-text-muted">
                            {label}
                          </p>
                          <p
                            className="text-sm font-medium truncate"
                            style={{ color: isDark ? text : color }}
                          >
                            {value}
                          </p>
                        </div>
                      </Wrapper>
                    </FadeIn>
                  );
                },
              )}
            </div>
          </div>

          {/* Right — form */}
          <FadeIn direction="right">
            <div className="glass-card p-7">
              {formState === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border ${
                    isDark
                      ? "bg-[rgba(16,185,129,0.12)] border-[rgba(16,185,129,0.25)]"
                      : "bg-[#059669] border-[#047857]"
                  }`}>
                    <CheckCircle size={28} className={isDark ? "text-[#6EE7B7]" : "text-white"} />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary font-heading">
                    {f.successTitle}
                  </h3>
                  <p className="text-sm text-text-secondary max-w-xs">
                    {f.successText}
                  </p>
                  <button
                    onClick={() => {
                      setFormState("idle");
                      setForm({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-2 text-sm text-primary-light hover:underline"
                  >
                    {f.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 className="text-lg font-bold text-text-primary font-heading mb-2">
                    {f.heading}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold text-text-muted tracking-wide"
                      >
                        {f.nameLabel} *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder={f.namePlaceholder}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold text-text-muted tracking-wide"
                      >
                        {f.emailLabel} *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder={f.emailPlaceholder}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="subject"
                      className="text-xs font-semibold text-text-muted tracking-wide"
                    >
                      {f.subjectLabel}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">{f.subjectDefault}</option>
                      {f.subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold text-text-muted tracking-wide"
                    >
                      {f.messageLabel} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder={f.messagePlaceholder}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState === "sending"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-primary hover:bg-primary-light text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover={{ scale: formState === "sending" ? 1 : 1.02 }}
                    whileTap={{ scale: formState === "sending" ? 1 : 0.98 }}
                  >
                    {formState === "sending" ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.8,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        {f.sending}
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        {f.send}
                      </>
                    )}
                  </motion.button>

                  <p className="text-[10px] text-center text-text-muted">
                    {f.disclaimer}
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
