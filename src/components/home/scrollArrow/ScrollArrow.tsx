'use client';

import useTranslation from 'next-translate/useTranslation';
import { ChevronDoubleDown } from 'react-bootstrap-icons';
import styles from './ScrollArrow.module.scss';

function ScrollArrow() {
  // t function for translation form the 'header' json file
  const { t } = useTranslation('home');
  const handleClick = () => {
    const targetElement = document.getElementById('about');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.arrow}>
      <a onClick={handleClick} aria-label={t('scrollArrowAriaLabel')}>
        <ChevronDoubleDown />
      </a>
    </div>
  );
}

export default ScrollArrow;
