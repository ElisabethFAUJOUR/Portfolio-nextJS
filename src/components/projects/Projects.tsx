import { getDictionary } from '@/utils/locales';
import FadeInSection from '../animations/FadeInSection/FadeInSection';
import ProjectCard from './projectCard/ProjectCard';
import styles from './Projects.module.scss';
import { Project } from '@/@types';

async function Projects({ locale }: { locale: string }) {
  // Get the 'home.json' file translations
  const projects = await getDictionary(locale, 'projects');
  const projectsCards: Project[] = projects.projectsCards;

  return (
    <FadeInSection customClass={`${styles.projects} main-layout`} id="projects">
      <h2 className={`${styles.title} main-title`}>Projets.</h2>
      <div className={styles.container}>
        {projectsCards.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
            imageSrc={project.imageSrc}
            tags={project.tags}
            buttonText={projects.button}
          />
        ))}
      </div>
    </FadeInSection>
  );
}

export default Projects;
