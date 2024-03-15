import NavLink from '../NavLink/NavLink';
import { NavLinkType } from '@/@types';
import styles from './NavLinks.module.scss';

interface NavLinksProps {
  navLinks: NavLinkType[];
}

function NavLinks({ navLinks }: NavLinksProps) {
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
