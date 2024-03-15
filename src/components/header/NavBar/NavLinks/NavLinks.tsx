import useTranslation from 'next-translate/useTranslation';
import { NavLinkType } from '@/@types';
import NavLink from '../NavLink/NavLink';
import styles from './NavLinks.module.scss';

function NavLinks() {
  // t function for translation form the 'navbar' json file
  const { t } = useTranslation('navbar');
  // Get all nav links from 'header' json file
  const navLinks: NavLinkType[] = t('navLinks', {}, { returnObjects: true });
  console.log(navLinks);
  return (
    <ul className={styles.list}>
      {navLinks.map((link) => (
        <li key={link.name} className={styles.link}>
          <NavLink link={link} />
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
