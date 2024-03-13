import NavBar from './NavBar/NavBar';
import Image from 'next/image';
import styles from './Header.module.scss';
import LanguageSelect from './LanguageSelect/LanguageSelect';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <a
          className={styles.logo}
          href="#"
          aria-label="Lien vers la page d'accueil"
        >
          <div className={styles.img}>
            <Image
              src="/images/logocat.webp"
              alt="ElisabethF Portfolio Logo"
              width={160}
              height={24.48}
              priority={true}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </a>
        {/* <LanguageSelect /> */}
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
