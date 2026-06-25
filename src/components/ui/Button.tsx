"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  href,
  onClick,
  className = "",
  target,
  rel,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-semibold shadow-lg shadow-[var(--color-primary-glow)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]",
    secondary:
      "bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] text-[#06060F] font-semibold shadow-lg shadow-[var(--color-secondary-glow)]",
    ghost:
      "bg-transparent hover:bg-white/5 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] font-medium",
    outline:
      "bg-transparent border border-[var(--color-border-soft)] hover:border-[var(--color-primary)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] font-medium",
  };

  const baseClasses = `inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] disabled:opacity-50 disabled:cursor-not-allowed select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={size === "lg" ? 20 : 16} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={size === "lg" ? 20 : 16} />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
    >
      {content}
    </motion.button>
  );
}
