import { skillsSections } from '@/data/data';
import SkillElem from '../skillElem/SkillElem';
import styles from './SkillCard.module.scss';

interface Elem {
  name: string;
  iconSrc: string;
}

interface SkillCardProps {
  elems: Elem[];
}

function SkillCard({ elems }: SkillCardProps) {
  return (
    <article className={`${styles.card} fade-in`}>
      <h3 className={styles.subtitle}>Front-End</h3>
      <ul className={styles.list}>
        {elems.map((elem) => (
          <SkillElem key={elem.name} name={elem.name} iconSrc={elem.iconSrc} />
        ))}
      </ul>
    </article>
  );
}

export default SkillCard;
