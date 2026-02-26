import { FC, useState } from 'react';
import { Project } from '../../types';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import { useIsMobile } from '../../hooks/useIsMobile';
import styles from './Projects.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const [isHovering, setIsHovering] = useState(false);
  const mousePos = useMouseParallax(15);
  const isMobile = useIsMobile();

  // Only apply mouse parallax when hovering and not on mobile
  const transform =
    isHovering && !isMobile
      ? `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`
      : 'translate(0, 0)';

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ transform }}
    >
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <div className={styles.technologies}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>
        {project.year && <div className={styles.year}>{project.year}</div>}
      </div>
    </div>
  );
};

export default ProjectCard;
