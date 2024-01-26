'use client';

import { navLinks } from '@/data/data';
import styles from './NavBar.module.scss';

function NavBar() {
  const handleClick = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      {navLinks.map((link) => {
        return (
          <a
            key={link.name}
            onClick={() => handleClick(link.id)}
            className={styles.link}
            rel="noopener noreferrer nofollow"
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
}

export default NavBar;
