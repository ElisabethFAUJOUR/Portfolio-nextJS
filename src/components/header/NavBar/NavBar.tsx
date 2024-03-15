'use client';

import { useState } from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import styles from './NavBar.module.scss';
import NavLinks from './NavLinks/NavLinks';

interface NavBarProps {
  burgerAriaLabel: string;
  burgertitle: string;
}

function NavBar({ burgerAriaLabel, burgertitle }: NavBarProps) {
  // State variable for the Burger Menu
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav className={`${styles.navbar} ${isOpen ? styles.active : ''}`}>
        <NavLinks />
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
