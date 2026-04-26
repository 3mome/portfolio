"use client";
import { createContext, useContext, useSyncExternalStore } from "react";
import { translations, type Locale } from "@/lib/i18n";

const LangContext = createContext<{
  locale: Locale;
  t: (typeof translations)[Locale];
  toggle: () => void;
}>({
  locale: "en",
  t: translations.en,
  toggle: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";

  const stored = localStorage.getItem("locale");
  return stored === "en" || stored === "th" ? stored : "en";
}

function subscribeLocale(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("localechange", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("localechange", onStoreChange);
  };
}

export default function LangProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useSyncExternalStore<Locale>(subscribeLocale, getStoredLocale, () => "en");

  const toggle = () => {
    const next: Locale = locale === "en" ? "th" : "en";
    localStorage.setItem("locale", next);
    window.dispatchEvent(new Event("localechange"));
  };

  return (
    <LangContext.Provider value={{ locale, t: translations[locale], toggle }}>
      {children}
    </LangContext.Provider>
  );
}
