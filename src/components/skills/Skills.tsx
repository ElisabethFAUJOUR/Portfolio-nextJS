import { skillsSections } from '@/data/data';
import SkillCard from './skillCard/SkillCard';
import FadeInSection from '../animations/FadeInSection/FadeInSection';
import styles from './Skills.module.scss';

function Skills() {
  return (
    <FadeInSection customClass={`${styles.skills} main-layout`} id="skills">
      <h2 className={`${styles.title} main-title fade-in`}>Compétences.</h2>
      <div className={`${styles.container} fade-in`}>
        {skillsSections.map((section) => (
          <SkillCard
            key={section.title}
            title={section.title}
            elems={section.elems}
          />
        ))}
      </div>
    </FadeInSection>
  );
}

export default Skills;
