import { BriefcaseFill } from 'react-bootstrap-icons';
import { Calendar3 } from 'react-bootstrap-icons';
import { BuildingFill } from 'react-bootstrap-icons';
import { MortarboardFill } from 'react-bootstrap-icons';
import styles from './Career.module.scss';

function Career() {
  return (
    <section className={`${styles.career} main-layout`} id="career">
      <h2 className={`${styles.title} main-title fade-in`}>Mon parcours.</h2>
      <div className={styles.timeline}>
        <article className={`${styles.container} fade-in`}>
          <div className={`${styles.icon} ${styles.left}`}>
            <BriefcaseFill size={20} color="#0f0b25" />
          </div>
          <div className={styles.block}>
            <h3 className={styles.title}>
              Développeur Web Front-End - Projet de fin de formation
            </h3>
            <p className={styles.date}>
              <Calendar3 /> Septembre 2023 – octobre 2023
            </p>
            <h4 className={styles.subtitle}>
              O&apos;Journey - Application d&apos;organisation de voyage
              interactive
            </h4>
            <ul className={styles.list}>
              <li className={styles.elem}>
                Projet réalisé en 1 mois, en équipe de 5 développeurs et
                reposant sur les méthodologie SCRUM et AGILE.
              </li>
              <li className={styles.elem}>
                Technos : React, Redux, Typescript, SCSS, API REST.
              </li>
              <li className={styles.elem}>
                Compétences : MVC, SPA, Responsive Design, UX/UI,
                Authentification par JWT, API REST, axios, Vercel, GitFlow, SEO,
                accessibilité, recommandations OWASP.
              </li>
            </ul>
            <p className={styles.location}>
              <BuildingFill /> Ecole O&apos;Clock (certifiée grande école du
              numérique)
            </p>
          </div>
        </article>

        <article className={`${styles.container} fade-in`}>
          <div className={`${styles.icon} ${styles.right}`}>
            <MortarboardFill size={20} color="#0f0b25" />
          </div>
          <div className={styles.block}>
            <h3 className={styles.title}>
              Titre RNCP Niveau 5 &apos;Développeur Web et Web Mobile&apos;
            </h3>
            <p className={styles.date}>
              <Calendar3 /> Mai – Octobre 2023
            </p>
            <h4 className={styles.subtitle}>Formation intensive de 798h</h4>
            <ul className={styles.list}>
              <li className={styles.elem}>3 mois de socle de Compétences</li>
              <li className={styles.elem}>1 mois de Spécialisation React</li>
              <li className={styles.elem}>
                1 mois de projet professionnel en équipe
              </li>
            </ul>
            <p className={styles.location}>
              <BuildingFill /> Ecole O&apos;Clock (certifiée grande école du
              numérique)
            </p>
          </div>
        </article>

        <article className={`${styles.container} fade-in`}>
          <div className={`${styles.icon} ${styles.left}`}>
            <BriefcaseFill size={20} color="#0f0b25" />
          </div>
          <div className={styles.block}>
            <h3 className={styles.title}>Masseur-kinésithérapeute libéral</h3>
            <p className={styles.date}>
              <Calendar3 /> Juillet 2016 – avril 2023
            </p>
            <ul className={styles.list}>
              <li className={styles.elem}>
                Remplaçante à l&apos;Ile de la Réunion pendant 6 mois
                post-diplôme
              </li>
              <li className={styles.elem}>
                Assitante-collaboratrice en cabinet de groupe avec une activité
                mixte cabinet/domicile dans la région Grenobloise.
              </li>
              <li className={styles.elem}>
                Spécialisation en Méthode Mckenzie de Diagnostic et Thérapie
                Mécanique{' '}
              </li>
              <li className={styles.elem}>
                Maîtrise des logiciels de gestion de cabinet et de
                télétransmission : VEGA, Topaze, Kiné+4000, Doctolib{' '}
              </li>
              <li className={styles.elem}>
                Tenue de comptabilité professionelle.
              </li>
            </ul>
          </div>
        </article>

        <article className={`${styles.container} fade-in`}>
          <div className={`${styles.icon} ${styles.right}`}>
            <MortarboardFill size={20} color="#0f0b25" />
          </div>
          <div className={styles.block}>
            <h3 className={styles.title}>
              Diplôme d&apos;état de Masseur-kinésithérapeute
            </h3>
            <p className={styles.date}>
              <Calendar3 /> 2013 – 2016
            </p>
            <p className={styles.location}>
              <BuildingFill /> Ecole de kinésithérapie du CHU de Grenoble
            </p>
          </div>
        </article>

        <article className={`${styles.container} fade-in`}>
          <div className={`${styles.icon} ${styles.left}`}>
            <MortarboardFill size={20} color="#0f0b25" />
          </div>
          <div className={styles.block}>
            <h3 className={styles.title}>
              PACES (Première Année Commune Aux études de Santé)
            </h3>
            <p className={styles.date}>
              <Calendar3 /> 2011 – 2013
            </p>
            <p className={styles.location}>
              <BuildingFill /> Université Grenobles Alpes - UFR Médecine
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Career;
