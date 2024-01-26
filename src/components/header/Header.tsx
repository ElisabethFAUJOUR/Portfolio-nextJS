import { navLinks } from '@/data/data';
import Image from 'next/image';
import styles from './Header.module.scss';
import { List } from 'react-bootstrap-icons';

function Header() {
  return (
    <header className={styles.header}>
      <a
        className={styles.logo}
        href="#"
        aria-label="Lien vers la page d'accueil"
      >
        <Image
          className={styles.img}
          src="/images/logocat.webp"
          alt="ElisabethF Portfolio Logo"
          width={160}
          height={24.48}
        />
      </a>
      <nav className={styles.navbar}>
        {navLinks.map((link) => {
          return (
            <a
              key={link.name}
              href={link.href}
              className={styles.link}
              rel="noopener noreferrer nofollow"
            >
              {link.name}
            </a>
          );
        })}
      </nav>
      <div
        className={styles.burger}
        aria-label="Bouton pour ouvrir le Menu Hamburger"
      >
        <List />
      </div>
    </header>
  );
}

export default Header;
