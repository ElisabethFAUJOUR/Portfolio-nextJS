import FadeInDiv from '@/components/animations/FadeInDiv/FadeInDiv';
import SkillElem from '../skillElem/SkillElem';
import styles from './SkillCard.module.scss';
import { Skill, SkillsSection } from '@/@types';

interface Elem {
  name: string;
  iconSrc: string;
}

interface SkillCardProps {
  section: SkillsSection;
}

function SkillCard({ section }: SkillCardProps) {
  return (
    <FadeInDiv customClass={styles.card}>
      <h3 className={styles.subtitle}>{section.title}</h3>
      <ul className={styles.list}>
        {section.elems.map((elem) => (
          <SkillElem key={elem.name} elem={elem} />
        ))}
      </ul>
    </FadeInDiv>
  );
}

export default SkillCard;
