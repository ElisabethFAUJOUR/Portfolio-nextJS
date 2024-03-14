'use client';

import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';
import { List, X } from 'react-bootstrap-icons';
import { NavLinks } from '@/@types';
import styles from './NavBar.module.scss';

function NavBar() {
  // t function for translation form the 'header' json file
  const { t } = useTranslation('header');
  // Get all nav links from 'header' json file
  const navLinks: NavLinks[] = t('navLinks', {}, { returnObjects: true });

  // State variable for the Burger Menu
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Toggle the burger menu
  const toggleBurgerMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Close the burger menu
  const closeBurgerMenu = () => {
    setIsOpen(false);
  };

  // Add a click event listener to close the menu
  useEffect(() => {
    document.body.addEventListener('click', closeBurgerMenu);

    return () => {
      document.body.removeEventListener('click', closeBurgerMenu);
    };
  }, []);

  // Smooth scroll on link click
  const handleClick = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      if (isOpen) {
        closeBurgerMenu();
      }
    }
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isOpen ? styles.active : ''}`}>
        <ul className={styles.list}>
          {navLinks.map((link) => (
            <li key={link.name} className={styles.link}>
              <a key={link.name} onClick={() => handleClick(link.id)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={styles.burger}
        type="button"
        onClick={toggleBurgerMenu}
        aria-label={t('burgerMenuAriaLabel')}
        title={t('burgerMenuTitle')}
      >
        {isOpen ? <X /> : <List />}
      </button>
    </>
  );
}

export default NavBar;
