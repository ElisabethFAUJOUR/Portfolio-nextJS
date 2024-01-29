'use client';

import { navLinks } from '@/data/data';
import { List, XLg } from 'react-bootstrap-icons';
import styles from './NavBar.module.scss';
import { useEffect, useState } from 'react';

function NavBar() {
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
    }
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isOpen ? styles.active : ''}`}>
        {navLinks.map((link) => {
          return (
            <a
              key={link.name}
              onClick={() => handleClick(link.id)}
              className={styles.link}
              rel="noopener noreferrer nofollow"
            >
              {link.name}
            </a>
          );
        })}
      </nav>
      <button
        className={styles.burger}
        type="button"
        onClick={toggleBurgerMenu}
        aria-label="Bouton pour ouvrir le Menu Hamburger"
        title="Menu"
      >
        {isOpen ? <XLg /> : <List />}
      </button>
    </>
  );
}

export default NavBar;
