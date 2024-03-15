'use client';

import { useEffect, useState } from 'react';
import { List, X } from 'react-bootstrap-icons';
import styles from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  ariaLabel: string;
  title: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void; // Función para actualizar el estado
}

function BurgerMenu({ ariaLabel, title, isOpen, setIsOpen }: BurgerMenuProps) {
  // Toggle the burger menu
  const toggleBurgerMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(!isOpen); // Usar setIsOpen de las props para actualizar el estado
  };

  // Close the burger menu
  const closeBurgerMenu = () => {
    setIsOpen(false); // Usar setIsOpen de las props para cerrar el menú
  };

  // Add a click event listener to close the menu
  useEffect(() => {
    document.body.addEventListener('click', closeBurgerMenu);

    return () => {
      document.body.removeEventListener('click', closeBurgerMenu);
    };
  }, []);

  return (
    <button
      className={styles.burger}
      type="button"
      onClick={toggleBurgerMenu}
      aria-label={ariaLabel}
      title={title}
    >
      {isOpen ? <X /> : <List />}
    </button>
  );
}

export default BurgerMenu;
