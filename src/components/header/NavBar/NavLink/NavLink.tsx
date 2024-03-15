'use client';

import { NavLinkType } from '@/@types';

interface NavLinkProps {
  link: NavLinkType;
}

//Smooth scroll on link click
const handleClick = (id: string) => {
  const targetElement = document.getElementById(id);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
    // if (isOpen) {
    //   closeBurgerMenu();
    // }
  }
};

function NavLink({ link }: NavLinkProps) {
  return (
    <a key={link.name} onClick={() => handleClick(link.id)}>
      {link.name}
    </a>
  );
}

export default NavLink;
