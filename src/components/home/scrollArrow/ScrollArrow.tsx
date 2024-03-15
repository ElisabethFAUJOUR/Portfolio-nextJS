'use client';

import { ChevronDoubleDown } from 'react-bootstrap-icons';
import styles from './ScrollArrow.module.scss';

interface ScrollArrowProps {
  ariaLabel: string;
}

function ScrollArrow({ ariaLabel }: ScrollArrowProps) {
  const handleClick = () => {
    const targetElement = document.getElementById('about');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.arrow}>
      <a onClick={handleClick} aria-label={ariaLabel}>
        <ChevronDoubleDown />
      </a>
    </div>
  );
}

export default ScrollArrow;
