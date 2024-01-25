import Link from "next/link";
import styles from "./Footer.module.scss";
import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { EnvelopeFill } from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.socials} fade-in`}>
        <a
          className={styles.link}
          href="https://github.com/ElisabethFAUJOUR"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil GitHub de Elisabeth Faujour"
        >
          <Github />
        </a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/elisabeth-faujour/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil LinkedIn de Elisabeth Faujour"
        >
          <Linkedin />
        </a>
        <a
          className={styles.link}
          href="mailto:efaujour@gmail.com"
          rel="noopener noreferrer"
          aria-label="Envoyer un e-mail à Elisabeth Faujour"
        >
          <EnvelopeFill />
        </a>
      </div>
      <p className={styles.text}>
        © 2023 Elisabeth FAUJOUR - Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;
