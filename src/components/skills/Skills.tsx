import SkillCard from './skillCard/SkillCard';
import FadeInSection from '../animations/FadeInSection/FadeInSection';
import styles from './Skills.module.scss';
import { SkillsSection } from '@/@types';
import { getDictionary } from '@/utils/locales';

async function Skills({ locale }: { locale: string }) {
  // Get the 'skills.json' file translations
  const skills = await getDictionary(locale, 'skills');
  const skillsSections: SkillsSection[] = skills.skillsSections;

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
