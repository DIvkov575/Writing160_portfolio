import { FC } from 'react';
import { Parallax } from 'react-scroll-parallax';
import ProjectCard from './ProjectCard';
import CloudLayer from '../Hero/CloudLayer';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

const Projects: FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      {/* Background clouds for depth */}
      <CloudLayer
        size="large"
        position={{ top: '10%', right: '5%' }}
        speed={0.15}
        opacity={0.35}
      />
      <CloudLayer
        size="medium"
        position={{ bottom: '20%', left: '8%' }}
        speed={0.2}
        opacity={0.4}
      />
      <CloudLayer
        size="small"
        position={{ top: '50%', left: '5%' }}
        speed={0.25}
        opacity={0.45}
      />

      <div className={styles.container}>
        <Parallax speed={-2} opacity={[0, 1]}>
          <h2 className={styles.sectionTitle}>Projects</h2>
        </Parallax>

        <Parallax speed={-1} opacity={[0, 1]}>
          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Parallax>
      </div>

      {/* Foreground clouds */}
      <CloudLayer
        size="medium"
        position={{ bottom: '5%', right: '10%' }}
        speed={0.35}
        opacity={0.5}
      />
    </section>
  );
};

export default Projects;
