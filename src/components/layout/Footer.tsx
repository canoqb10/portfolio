"use client";

import { Mail, MapPin, Heart } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui";
import { useTranslation } from "@/i18n/context";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const socials = [
    {
      Icon: LinkedinIcon,
      href: personalInfo.linkedin,
      label: t.contact.socials.linkedin,
      isSvg: true,
    },
    {
      Icon: GithubIcon,
      href: personalInfo.github,
      label: t.contact.socials.github,
      isSvg: true,
    },
    {
      Icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: t.contact.socials.email,
      isSvg: false,
    },
  ];

  return (
    <footer className="relative border-t border-border-dim bg-bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                JC
              </div>
              <span className="font-heading font-bold text-text-primary">
                José Alberto Cano
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-text-muted">
              <MapPin size={12} />
              {personalInfo.location}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">
              {t.footer.nav}
            </p>
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">
              {t.footer.connect}
            </p>
            <div className="flex flex-col gap-3">
              {socials.map(({ Icon, href, label, isSvg }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary-light transition-colors group"
                >
                  {isSvg ? (
                    <Icon
                      style={{ width: 14, height: 14 }}
                      className="text-text-muted group-hover:text-primary transition-colors"
                    />
                  ) : (
                    <Icon
                      size={14}
                      className="text-text-muted group-hover:text-primary transition-colors"
                    />
                  )}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border-dim flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <span>© {year} José Alberto Cano Govea. All rights reserved.</span>
          <span className="flex items-center gap-1">
            {t.footer.builtWith} {t.footer.builtUsing}
          </span>
        </div>
      </div>
    </footer>
  );
}
