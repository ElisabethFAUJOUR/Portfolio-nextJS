'use client';

import { useState } from 'react';
import Link from 'next/link';
import { availableLocales } from '@/lib/i18n';
import styles from './LanguageSelect.module.scss';
import { Globe } from 'react-bootstrap-icons';

function LanguageSelect() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('fr');

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <div className={styles.language}>
      <ul className={styles.list}>
        {availableLocales.map((locale) => (
          <li
            key={locale}
            className={`${styles.locale} ${selectedLanguage === locale && styles.active}`}
          >
            {selectedLanguage === locale && <Globe size={14} />}
            <Link
              href={'/'}
              locale={locale}
              onClick={() => handleLanguageChange(locale)}
              aria-label="Changer le language"
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
