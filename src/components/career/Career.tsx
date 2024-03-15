import { getDictionary } from '@/utils/locales';
import FadeInDiv from '../animations/FadeInDiv/FadeInDiv';
import FadeInSection from '../animations/FadeInSection/FadeInSection';
import { CareerSection } from '@/@types';
import { BriefcaseFill } from 'react-bootstrap-icons';
import { Calendar3 } from 'react-bootstrap-icons';
import { BuildingFill } from 'react-bootstrap-icons';
import { MortarboardFill } from 'react-bootstrap-icons';
import styles from './Career.module.scss';

async function Career({ locale }: { locale: string }) {
  // Get the 'career.json' file translations
  const career = await getDictionary(locale, 'career');
  const careerSection: CareerSection[] = career.careerSection;

  return (
    <FadeInSection customClass={`${styles.career} main-layout`} id="career">
      <h2 className={`${styles.title} main-title`}>{career.title}</h2>
      <div className={styles.timeline}>
        {careerSection.map((career, index) => (
          <FadeInDiv key={index} customClass={styles.container}>
            <div
              className={`${styles.icon} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              {index % 2 === 0 ? (
                <BriefcaseFill size={20} color="#0f0b25" />
              ) : (
                <MortarboardFill size={20} color="#0f0b25" />
              )}
            </div>
            <div className={styles.block}>
              <h3 className={styles.title}>{career.title}</h3>
              <p className={styles.date}>
                <Calendar3 /> {career.date}
              </p>
              {career.subtitle && (
                <h4 className={styles.subtitle}>{career.subtitle}</h4>
              )}
              <ul className={styles.list}>
                {career.description &&
                  career.description.map((desc, idx) => (
                    <li key={idx} className={styles.elem}>
                      {desc}
                    </li>
                  ))}
              </ul>
              {career.location && (
                <p className={styles.location}>
                  <BuildingFill /> {career.location}
                </p>
              )}
            </div>
          </FadeInDiv>
        ))}
      </div>
    </FadeInSection>
  );
}

export default Career;
