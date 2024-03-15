'use client';

import { useState } from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import styles from './NavBar.module.scss';
import NavLinks from './NavLinks/NavLinks';
import { NavLinkType } from '@/@types';

interface NavBarProps {
  burgerAriaLabel: string;
  burgertitle: string;
  navLinks: NavLinkType[];
}

function NavBar({ burgerAriaLabel, burgertitle, navLinks }: NavBarProps) {
  // State variable for the Burger Menu
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav className={`${styles.navbar} ${isOpen ? styles.active : ''}`}>
        <NavLinks navLinks={navLinks} />
      </nav>
      <BurgerMenu
        isOpen={isOpen}
        ariaLabel={burgerAriaLabel}
        title={burgertitle}
        setIsOpen={setIsOpen}
      />
    </>
  );
}

export default NavBar;
