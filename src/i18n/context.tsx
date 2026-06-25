"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { type UI, getUi } from "@/i18n/ui";

export type Lang = "en" | "es";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: UI;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: getUi("en"),
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang") as Lang | null;
    const browser = navigator.language.startsWith("es") ? "es" : "en";
    const resolved = saved ?? browser;
    if (resolved === "en" || resolved === "es") setLangState(resolved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("portfolio-lang", l);
    document.documentElement.lang = l;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: getUi(lang) }}>
      {children}
    </LangContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LangContext);
}
