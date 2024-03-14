import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { nanoid } from 'nanoid';
import FadeInDiv from '@/components/animations/FadeInDiv/FadeInDiv';
import styles from './ProjectCard.module.scss';

interface Tag {}

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
  tags: string[];
}

function ProjectCard({
  title,
  description,
  link,
  imageSrc,
  tags,
}: ProjectCardProps) {
  // t function for translation form the 'projects' json file
  const { t } = useTranslation('projects');
  return (
    <a
      className={`${styles.link}`}
      href={link}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <FadeInDiv customClass={styles.card}>
        <div className={styles.img}>
          <Image
            src={imageSrc}
            alt={title}
            width={362}
            height={175}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>

        <div className={styles.body}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span className={styles.elem} key={nanoid()}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.overlay}>
          <button className={styles.button} type="button">
            {t('button')}
          </button>
        </div>
      </FadeInDiv>
    </a>
  );
}

export default ProjectCard;
