'use client';

import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import Link from 'next/link';
import { locales } from '../../../../i18n';
import styles from './LanguageSelect.module.scss';
import { Globe } from 'react-bootstrap-icons';

function LanguageSelect() {
  // t function for translation form the 'header' json file
  const { t, lang } = useTranslation('header');

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
              href={'/'}
              locale={locale}
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              aria-label={t('languageSelectAriaLabel')}
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
