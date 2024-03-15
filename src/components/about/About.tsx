import { getDictionary } from '@/utils/locales';
import FadeInSection from '../animations/FadeInSection/FadeInSection';
import Image from 'next/image';
import styles from './About.module.scss';

async function About({ locale }: { locale: string }) {
  // Get the 'about.json' file translations
  const about = await getDictionary(locale, 'about');
  return (
    <FadeInSection customClass={`${styles.about} main-layout`} id="about">
      <h2 className={`${styles.title} main-title`}>{about.title}</h2>
      <div className={styles.container}>
        <article className={styles.article}>
          <div className={styles.text}>
            <p className={styles.quote}>
              &quot;I&apos;m going on an adventure !&quot; - Bilbo Bagcgins
            </p>
            <p className={styles.paragraph}>{about.paragraph1}</p>
            <p className={styles.paragraph}>
              {about.paragraph2.part1}
              <span className={styles.bold}>{about.paragraph2.bold1}</span>
              {about.paragraph2.part2}
              <span className={styles.bold}>{about.paragraph2.bold2}</span>
              {about.paragraph2.part3}
              <span className={styles.bold}>{about.paragraph2.bold3}</span>
              {about.paragraph2.part4}
            </p>
            <p className={styles.paragraph}>
              <span className={styles.bold}>{about.paragraph3.bold1}</span>
              {about.paragraph3.part1}
              <span className={styles.bold}>{about.paragraph3.bold2}</span>
              {about.paragraph3.part2}
              <span className={styles.bold}>{about.paragraph3.bold3}</span>
              {about.paragraph3.part3}
            </p>
          </div>
        </article>
        <div className={styles.img}>
          <Image
            src="/images/photo.webp"
            alt="Elisabeth Photo"
            width={396}
            height={396}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </FadeInSection>
  );
}

export default About;
