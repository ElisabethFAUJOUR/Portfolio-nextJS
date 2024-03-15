import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { EnvelopeFill } from 'react-bootstrap-icons';
import styles from './Footer.module.scss';
import FadeInDiv from '../animations/FadeInDiv/FadeInDiv';
import { getDictionary } from '@/utils/locales';

async function Footer({ locale }: { locale: string }) {
  // Get the 'footer.json' file translations
  const footer = await getDictionary(locale, 'footer');

  return (
    <footer className={styles.footer}>
      <FadeInDiv customClass={styles.socials}>
        <a
          className={styles.link}
          href="https://github.com/ElisabethFjr"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label={footer.github_aria_label}
        >
          <Github />
        </a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/elisabeth-faujour/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label={footer.linkedinAriaLabel}
        >
          <Linkedin />
        </a>
        <a
          className={styles.link}
          href="mailto:efaujour@gmail.com"
          rel="noopener noreferrer nofollow"
          aria-label={footer.emailAriaLabel}
        >
          <EnvelopeFill />
        </a>
      </FadeInDiv>
      <p className={styles.text}>{footer.rights}</p>
      <p className={styles.text}>
        {footer.madeWith} <span className={styles.bold}>{footer.next}</span>.
      </p>
    </footer>
  );
}

export default Footer;
