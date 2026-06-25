interface BadgeProps {
  label: string;
  variant?: string;
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({
  label,
  variant = "badge-default",
  size = "md",
  className = "",
}: BadgeProps) {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-xs",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border font-medium tracking-wide transition-all duration-200 ${sizeClasses[size]} ${variant} ${className}`}
    >
      {label}
    </span>
  );
}
