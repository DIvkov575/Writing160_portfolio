import { FC, useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import CloudLayer from '../Hero/CloudLayer';
import styles from './ResearchProject.module.css';

const ResearchProject: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="research-project" className={styles.section} ref={sectionRef}>
      {/* Background Clouds */}
      <CloudLayer
        size="large"
        position={{ top: '15%', left: '10%' }}
        speed={0.14}
        opacity={0.36}
      />
      <CloudLayer
        size="medium"
        position={{ top: '55%', right: '8%' }}
        speed={0.19}
        opacity={0.44}
      />
      <CloudLayer
        size="small"
        position={{ bottom: '25%', left: '12%' }}
        speed={0.24}
        opacity={0.46}
      />
      <CloudLayer
        size="small"
        position={{ top: '35%', right: '18%' }}
        speed={0.28}
        opacity={0.42}
      />

      <div className={styles.container}>
        <Parallax speed={-6}>
          <div className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}>
            <h2 className={styles.title}>Research Project</h2>
          </div>
        </Parallax>

        <Parallax speed={-4}>
          <div
            className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <p className={styles.subtitle}>
              Annotated Bibliography & Multimodal Piece
            </p>
          </div>
        </Parallax>

        <Parallax speed={-2}>
          <div
            className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className={styles.content}>
              <p>Statement about piece will be added here.</p>
              <p>Changes I made will be documented here.</p>
            </div>
          </div>
        </Parallax>

        <Parallax speed={0}>
          <div
            className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: '0.6s' }}
          >
            <div className={styles.metadata}>
              <span className={styles.tag}>2025</span>
            </div>
          </div>
        </Parallax>
      </div>

      {/* Foreground Clouds */}
      <CloudLayer
        size="medium"
        position={{ bottom: '12%', right: '6%' }}
        speed={0.34}
        opacity={0.5}
      />
    </section>
  );
};

export default ResearchProject;
