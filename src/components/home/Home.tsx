import useTranslation from 'next-translate/useTranslation';
import AnimeCat from './animeCat/AnimeCat';
import ScrollArrow from './scrollArrow/ScrollArrow';
import FadeInSection from '../animations/FadeInSection/FadeInSection';
import {
  Github,
  Linkedin,
  EnvelopeFill,
  Download,
} from 'react-bootstrap-icons';
import styles from './Home.module.scss';

function Home() {
  // t function for translation form the 'home' json file
  const { t } = useTranslation('home');
  return (
    <FadeInSection customClass={styles.home} id="home">
      <ScrollArrow />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.socials}>
            <a
              className={styles.link}
              href="https://github.com/ElisabethFjr"
              target="_blank"
              aria-label={t('githubAriaLabel')}
            >
              <Github />
            </a>
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/elisabeth-faujour/"
              target="_blank"
              aria-label={t('linkedinAriaLabel')}
            >
              <Linkedin />
            </a>
            <a
              className={styles.link}
              href="mailto:efaujour@gmail.com"
              aria-label={t('emailAriaLabel')}
            >
              <EnvelopeFill />
            </a>
          </div>
          <div className={styles.infos}>
            <div>
              <h1 className={styles.name}>Elisabeth FAUJOUR</h1>
              <h2 className={styles.job}>{t('jobTitle')}</h2>
            </div>
            <a
              className={styles.resume}
              href="/docs/Elisabeth_FAUJOUR_CV.pdf"
              download="Elisabeth_FAUJOUR_CV.pdf"
              aria-label={t('resumeAriaLabel')}
              title={t('resumeTitle')}
            >
              <Download size={16} /> {t('resumeButton')}
            </a>
          </div>
        </div>
        <AnimeCat />
      </div>
    </FadeInSection>
  );
}

export default Home;
