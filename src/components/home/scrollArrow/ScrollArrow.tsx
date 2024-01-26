'use client';

import { ChevronDoubleDown } from 'react-bootstrap-icons';
import styles from './ScrollArrow.module.scss';

function ScrollArrow() {
  const handleClick = () => {
    const targetElement = document.getElementById('about');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.arrow}>
      <a
        onClick={handleClick}
        aria-label="Faire défiler vers le bas jusqu'à la section A propos"
      >
        <ChevronDoubleDown />
      </a>
    </div>
  );
}

export default ScrollArrow;
