import NavBar from './NavBar/NavBar';
import Image from 'next/image';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import { NavLinkType } from '@/@types';
import styles from './Header.module.scss';
import { getDictionary } from '@/utils/locales';

async function Header({ locale }: { locale: string }) {
  // Get the 'header.json' file translations
  const header = await getDictionary(locale, 'header');
  const navLinks: NavLinkType[] = header.navLinks;

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <a className={styles.logo} href="#" aria-label={header.logoAriaLabel}>
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
        <LanguageSelect arialabel={header.arialabel} locale={locale} />
      </div>
      <NavBar
        burgerAriaLabel={header.burgerMenuAriaLabel}
        burgertitle={header.burgerMenuTitle}
        navLinks={navLinks}
      />
    </header>
  );
}

export default Header;
