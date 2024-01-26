import Image from 'next/image';
import styles from './SkillElem.module.scss';

interface SkillElemProps {
  name: string;
  iconSrc: string;
}

function SkillElem({ name, iconSrc }: SkillElemProps) {
  return (
    <li className={styles.element}>
      <Image
        className={styles.icon}
        src={iconSrc}
        alt={name}
        width={45}
        height={45}
      />
      <p className={styles.text}>{name}</p>
    </li>
  );
}

export default SkillElem;
