import FadeInSection from '../animations/FadeInSection/FadeInSection';
import AnimeCat from './animeCat/AnimeCat';
import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { EnvelopeFill } from 'react-bootstrap-icons';
import { Download } from 'react-bootstrap-icons';
import styles from './Home.module.scss';
import ScrollArrow from './scrollArrow/ScrollArrow';

function Home() {
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
              aria-label="Profil GitHub de Elisabeth Faujour"
            >
              <Github />
            </a>
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/elisabeth-faujour/"
              target="_blank"
              aria-label="Profil LinkedIn de Elisabeth Faujour"
            >
              <Linkedin />
            </a>
            <a
              className={styles.link}
              href="mailto:efaujour@gmail.com"
              aria-label="Envoyer un e-mail à Elisabeth Faujour"
            >
              <EnvelopeFill />
            </a>
          </div>
          <div className={styles.infos}>
            <div>
              <h1 className={styles.name}>Elisabeth FAUJOUR</h1>
              <h2 className={styles.job}>
                Développeuse Web React | Next.js | Node.js
              </h2>
            </div>
            <a
              className={styles.resume}
              href="/docs/Elisabeth_FAUJOUR_CV.pdf"
              download="Elisabeth_FAUJOUR_CV.pdf"
              aria-label="Télécharger mon CV"
              title="Télécharger mon CV"
            >
              <Download size={16} /> Mon CV
            </a>
          </div>
        </div>
        <AnimeCat />
      </div>
    </FadeInSection>
  );
}

export default Home;
