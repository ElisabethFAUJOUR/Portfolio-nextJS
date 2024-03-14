import SkillCard from './skillCard/SkillCard';
import FadeInSection from '../animations/FadeInSection/FadeInSection';
import styles from './Skills.module.scss';
import useTranslation from 'next-translate/useTranslation';
import { SkillsSection } from '@/@types';

function Skills() {
  // t function for translation form the 'skills' json file
  const { t } = useTranslation('skills');
  const skillsSections: SkillsSection[] = t(
    'skillsSections',
    {},
    { returnObjects: true }
  );

  return (
    <FadeInSection customClass={`${styles.skills} main-layout`} id="skills">
      <h2 className={`${styles.title} main-title`}>Compétences.</h2>
      <div className={styles.container}>
        {skillsSections.map((section) => (
          <SkillCard key={section.title} section={section} />
        ))}
      </div>
    </FadeInSection>
  );
}

export default Skills;
