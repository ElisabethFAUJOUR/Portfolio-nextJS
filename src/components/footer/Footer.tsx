import Link from 'next/link';
import FadeInSection from '../animations/FadeInSection/FadeInSection';
import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { EnvelopeFill } from 'react-bootstrap-icons';
import styles from './Footer.module.scss';
import FadeInDiv from '../animations/FadeInDiv/FadeInDiv';

function Footer() {
  return (
    <footer className={styles.footer}>
      <FadeInDiv customClass={styles.socials}>
        <a
          className={styles.link}
          href="https://github.com/ElisabethFjr"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="Profil GitHub de Elisabeth Faujour"
        >
          <Github />
        </a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/elisabeth-faujour/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="Profil LinkedIn de Elisabeth Faujour"
        >
          <Linkedin />
        </a>
        <a
          className={styles.link}
          href="mailto:efaujour@gmail.com"
          rel="noopener noreferrer nofollow"
          aria-label="Envoyer un e-mail à Elisabeth Faujour"
        >
          <EnvelopeFill />
        </a>
      </FadeInDiv>
      <p className={styles.text}>
        © 2023 Elisabeth FAUJOUR - Tous droits réservés.
      </p>
      <p className={styles.text}>
        Réalisé avec <span className={styles.bold}>NextJS</span>.
      </p>
    </footer>
  );
}

export default Footer;
