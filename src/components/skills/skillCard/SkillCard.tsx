import FadeInDiv from '@/components/animations/FadeInDiv/FadeInDiv';
import SkillElem from '../skillElem/SkillElem';
import styles from './SkillCard.module.scss';

interface Elem {
  name: string;
  iconSrc: string;
}

interface SkillCardProps {
  title: string;
  elems: Elem[];
}

function SkillCard({ title, elems }: SkillCardProps) {
  return (
    <FadeInDiv customClass={styles.card}>
      <h3 className={styles.subtitle}>{title}</h3>
      <ul className={styles.list}>
        {elems.map((elem) => (
          <SkillElem key={elem.name} name={elem.name} iconSrc={elem.iconSrc} />
        ))}
      </ul>
    </FadeInDiv>
  );
}

export default SkillCard;
