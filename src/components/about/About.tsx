import FadeInSection from '../animations/FadeInSection/FadeInSection';
import Image from 'next/image';
import styles from './About.module.scss';

function About() {
  return (
    <FadeInSection customClass={`${styles.about} main-layout`} id="about">
      <h2 className={`${styles.title} main-title`}>A propos.</h2>
      <div className={styles.container}>
        <article className={styles.article}>
          <div className={styles.text}>
            <p className={styles.quote}>
              &quot;I&apos;m going on an adventure !&quot; - Bilbo Baggins
            </p>
            <p className={styles.paragraph}>
              Après 7 années passionnantes en tant que Masseur-kinésithérapeute
              libéral, j&apos;ai décidé de sortir de ma zone de confort pour
              d&apos;explorer de nouveaux horizons professionnels, plongeant
              ainsi dans le vaste monde du Développement Web.
            </p>
            <p className={styles.paragraph}>
              Forte de mon expérience en Santé, j&apos;accorde une attention
              particulière à l&apos;
              <span className={styles.bold}>accessibilité</span> lors de la
              création de mes applications web, assurant une inclusivité totale.
              Mon engagement se traduit par la création de solutions numériques{' '}
              <span className={styles.bold}>performantes</span>, centrées sur
              les{' '}
              <span className={styles.bold}>besoins de l&apos;utilisateur</span>{' '}
              et offrant une expérience optimale.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.bold}>Consciencieuse</span> et sensible au{' '}
              <span className={styles.bold}>sens du détail</span>, j&apos;ai à
              cœur de produire des résultats toujours meilleurs. Prête à
              affronter de nouveaux challenges, je suis impatiente de mettre mes
              compétences et ma <span className={styles.bold}>créativité</span>{' '}
              au cœur de projets innovants !
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
