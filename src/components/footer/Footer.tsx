import useTranslation from 'next-translate/useTranslation';
import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { EnvelopeFill } from 'react-bootstrap-icons';
import styles from './Footer.module.scss';
import FadeInDiv from '../animations/FadeInDiv/FadeInDiv';

function Footer() {
  // t function for translation form the 'footer' json file
  const { t } = useTranslation('footer');

  return (
    <footer className={styles.footer}>
      <FadeInDiv customClass={styles.socials}>
        <a
          className={styles.link}
          href="https://github.com/ElisabethFjr"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label={t('socials.github_aria_label')}
        >
          <Github />
        </a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/elisabeth-faujour/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label={t('linkedinAriaLabel')}
        >
          <Linkedin />
        </a>
        <a
          className={styles.link}
          href="mailto:efaujour@gmail.com"
          rel="noopener noreferrer nofollow"
          aria-label={t('emailAriaLabel')}
        >
          <EnvelopeFill />
        </a>
      </FadeInDiv>
      <p className={styles.text}>{t('rights')}</p>
      <p className={styles.text}>
        {t('madeWith')} <span className={styles.bold}>{t('next')}</span>.
      </p>
    </footer>
  );
}

export default Footer;
