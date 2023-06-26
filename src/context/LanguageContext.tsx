import { useState, useMemo, createContext, PropsWithChildren, useContext } from "react";

export enum Language {
  English = 'english',
  Deutsch = 'deutsch'
}

type LanguageContextProps = undefined | {
  language: Language
  setLanguage: (lan: Language) => void;
  allLanguages: string[]
}

const LanguageContext = createContext<LanguageContextProps>(undefined)

export const LanguageContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [language, setLanguage] = useState<Language>(Language.English);

  const allLanguages = useMemo((): string[] => Object.values(Language), [])

  const value = useMemo(() => ({
    language,
    setLanguage,
    allLanguages
  }), [
    language,
    setLanguage,
    allLanguages
  ])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguageContext = () => {
  const ctx = useContext(LanguageContext)
  if (ctx === undefined) {
    throw new Error('Something went wrong with useLanguageContext')
  }
  return ctx;
}
