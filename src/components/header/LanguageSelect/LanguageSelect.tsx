'use client';

import { useState } from 'react';
import Link from 'next/link';
import { locales } from '@/utils/i18nConfig';
import styles from './LanguageSelect.module.scss';
import { Globe } from 'react-bootstrap-icons';

function LanguageSelect({ arialabel }: { arialabel: string }) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('fr');

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <div className={styles.language}>
      <ul className={styles.list}>
        {locales.map((locale) => (
          <li
            key={locale}
            className={`${styles.locale} ${selectedLanguage === locale && styles.active}`}
          >
            {selectedLanguage === locale && <Globe size={14} />}
            <Link
              href={`/${locale}`}
              locale={locale}
              key={locale}
              aria-label={arialabel}
              onClick={() => handleLanguageChange(locale)}
            >
              {locale.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
      <span
        className={`${styles.slide} ${selectedLanguage === 'fr' ? styles.fr : styles.en}`}
      />
    </div>
  );
}

export default LanguageSelect;
