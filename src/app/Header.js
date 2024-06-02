"use client";

import Image from "next/image";
import styles from "./page.module.css";
import header from "./header.module.css";
import { useTranslation } from "./contexts/TranslationContext";

export default function Header() {
  const { switchLanguage, language } = useTranslation();
  return (
    <div className={header.description}>
      <p>ABOUT</p>
      <div>
        <a href="/" target="_self" rel="noopener noreferrer">
          {" "}
          <Image
            src="/logo.png"
            alt="ADHD Logo"
            className={styles.vercelLogo}
            fontSize={15}
            width={160}
            height={54}
            priority
          />
        </a>
      </div>
      <div className={header.languageSetting}>
        <LanguageButton
          language="en"
          switchLanguage={switchLanguage}
          isSelected={language === "en"}
          text="ENG"
        />
        <LanguageButton
          language="ko"
          switchLanguage={switchLanguage}
          isSelected={language === "ko"}
          text="KOR"
        />
      </div>
    </div>
  );
}

const LanguageButton = ({ language, switchLanguage, isSelected, text }) => (
  <div
    onClick={() => switchLanguage(language)}
    className={isSelected && header.languageSelected}
  >
    {text}
  </div>
);
