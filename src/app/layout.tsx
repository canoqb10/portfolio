import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/context";
import { ThemeProvider } from "@/theme/context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "José Alberto Cano Govea — Senior Frontend Engineer",
  description:
    "Senior Software Engineer & Frontend Developer with 10+ years of experience building scalable, user-focused web applications. Specialized in React, Angular, TypeScript, and Microfrontend architectures.",
  keywords: [
    "Senior Frontend Engineer",
    "React Developer",
    "Angular Developer",
    "TypeScript",
    "Microfrontends",
    "Web Development",
    "México",
    "José Cano",
  ],
  authors: [{ name: "José Alberto Cano Govea", url: "mailto:juliojacg@hotmail.com" }],
  openGraph: {
    title: "José Alberto Cano Govea — Senior Frontend Engineer",
    description:
      "Senior Software Engineer with 10+ years building enterprise-grade web platforms. React, Angular, TypeScript specialist.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "José Alberto Cano Govea — Senior Frontend Engineer",
    description:
      "Senior Software Engineer with 10+ years building enterprise-grade web platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Inline script runs before React hydrates — prevents flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('portfolio-theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t||d);}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
