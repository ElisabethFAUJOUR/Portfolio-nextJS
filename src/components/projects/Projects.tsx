import useTranslation from 'next-translate/useTranslation';
import FadeInSection from '../animations/FadeInSection/FadeInSection';
import ProjectCard from './projectCard/ProjectCard';
import styles from './Projects.module.scss';
import { Project } from '@/@types';

function Projects() {
  // t function for translation form the 'projects' json file
  const { t } = useTranslation('projects');
  const projects: Project[] = t('projects', {}, { returnObjects: true });

  return (
    <FadeInSection customClass={`${styles.projects} main-layout`} id="projects">
      <h2 className={`${styles.title} main-title`}>Projets.</h2>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
            imageSrc={project.imageSrc}
            tags={project.tags}
          />
        ))}
      </div>
    </FadeInSection>
  );
}

export default Projects;
