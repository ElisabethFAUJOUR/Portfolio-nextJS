import useTranslation from 'next-translate/useTranslation';
import FadeInSection from '../animations/FadeInSection/FadeInSection';
import Image from 'next/image';
import styles from './About.module.scss';

function About() {
  // t function for translation form the 'about' json file
  const { t } = useTranslation('about');
  return (
    <FadeInSection customClass={`${styles.about} main-layout`} id="about">
      <h2 className={`${styles.title} main-title`}>{t('title')}</h2>
      <div className={styles.container}>
        <article className={styles.article}>
          <div className={styles.text}>
            <p className={styles.quote}>
              &quot;I&apos;m going on an adventure !&quot; - Bilbo Baggins
            </p>
            <p className={styles.paragraph}>{t('paragraph1')}</p>
            <p className={styles.paragraph}>
              {t('paragraph2.part1')}
              <span className={styles.bold}>{t('paragraph2.bold1')}</span>
              {t('paragraph2.part2')}
              <span className={styles.bold}>{t('paragraph2.bold2')}</span>
              {t('paragraph2.part3')}
              <span className={styles.bold}>{t('paragraph2.bold3')}</span>
              {t('paragraph2.part4')}
            </p>
            <p className={styles.paragraph}>
              <span className={styles.bold}>{t('paragraph3.bold1')}</span>
              {t('paragraph3.part1')}
              <span className={styles.bold}>{t('paragraph3.bold2')}</span>
              {t('paragraph3.part2')}
              <span className={styles.bold}>{t('paragraph3.bold3')}</span>
              {t('paragraph3.part3')}
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
