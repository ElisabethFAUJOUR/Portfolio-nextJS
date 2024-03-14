import Image from 'next/image';
import styles from './SkillElem.module.scss';
import { Skill } from '@/@types';

interface SkillElemProps {
  elem: Skill;
}

function SkillElem({ elem }: SkillElemProps) {
  return (
    <li className={styles.element}>
      <Image src={elem.iconSrc} alt={elem.name} width={45} height={45} />
      <p className={styles.text}>{elem.name}</p>
    </li>
  );
}

export default SkillElem;
