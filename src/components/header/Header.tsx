import useTranslation from 'next-translate/useTranslation';
import NavBar from './NavBar/NavBar';
import Image from 'next/image';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import styles from './Header.module.scss';

function Header() {
  // t function for translation form the 'header' json file
  const { t } = useTranslation('header');
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <a className={styles.logo} href="#" aria-label={t('logo.aria_label')}>
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
        <LanguageSelect />
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
