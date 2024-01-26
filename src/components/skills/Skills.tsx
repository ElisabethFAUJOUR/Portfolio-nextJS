import { skillsSections } from '@/data/data';
import Image from 'next/image';
import styles from './Skills.module.scss';
import SkillCard from './skillCard/SkillCard';

function Skills() {
  return (
    <section className={`${styles.skills} main-layout`} id="skills">
      <h2 className={`${styles.title} main-title fade-in`}>Compétences.</h2>
      <div className={`${styles.container} fade-in`}>
        {skillsSections.map((section) => (
          <SkillCard key={section.name} elems={section.elems} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
