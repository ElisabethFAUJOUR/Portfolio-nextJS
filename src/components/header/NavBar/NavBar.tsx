'use client';

import { useEffect, useState } from 'react';
import { navLinks } from '@/data/data';
import { List, X } from 'react-bootstrap-icons';
import styles from './NavBar.module.scss';

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
        aria-label="Bouton pour ouvrir le Menu Hamburger"
        title="Menu"
      >
        {isOpen ? <X /> : <List />}
      </button>
    </>
  );
}

export default NavBar;
