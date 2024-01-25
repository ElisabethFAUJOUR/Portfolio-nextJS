import Image from "next/image";
import styles from "./Header.module.scss";
import { List } from "react-bootstrap-icons";
import { Link } from "react-bootstrap-icons";

const links = [
  { name: "Home", href: "#home" },
  { name: "A propos", href: "#about" },
  { name: "Mon parcours", href: "#career" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Header() {
  return (
    <header className={styles.header}>
      <a
        className={styles.logo}
        href="#"
        aria-label="Lien vers la page d'accueil"
      >
        <Image
          className={styles.img}
          src="/images/logocat.webp"
          alt="ElisabethF Portfolio Logo"
          width={160}
          height={24.48}
        />
      </a>
      <nav className={styles.navbar}>
        {links.map((link) => {
          return (
            <a key={link.name} href={link.href} className={styles.link}>
              {link.name}
            </a>
          );
        })}
      </nav>
      <div
        className={styles.burger}
        aria-label="Bouton pour ouvrir le Menu Hamburger"
      >
        <List />
      </div>
    </header>
  );
}

export default Header;
