import { navLinks } from '@/data/data';
import NavBar from './NavBar/NavBar';
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
          src="/images/logocat.webp"
          alt="ElisabethF Portfolio Logo"
          width={160}
          height={24.48}
        />
      </a>
      <NavBar />
    </header>
  );
}

export default Header;
