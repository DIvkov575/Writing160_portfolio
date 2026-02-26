import { FC, useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import CloudLayer from '../Hero/CloudLayer';
import styles from './TravelNarrative.module.css';

const TravelNarrative: FC = () => {
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
    <section id="travel-narrative" className={styles.section} ref={sectionRef}>
      {/* Background Clouds */}
      <CloudLayer
        size="large"
        position={{ top: '10%', left: '5%' }}
        speed={0.15}
        opacity={0.35}
      />
      <CloudLayer
        size="medium"
        position={{ top: '50%', right: '10%' }}
        speed={0.2}
        opacity={0.4}
      />
      <CloudLayer
        size="small"
        position={{ bottom: '20%', left: '15%' }}
        speed={0.25}
        opacity={0.45}
      />

      <div className={styles.container}>
        <Parallax speed={-5}>
          <div className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}>
            <h2 className={styles.title}>Travel Literacy Narrative Essay</h2>
          </div>
        </Parallax>

        <Parallax speed={-3}>
          <div
            className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <p className={styles.subtitle}>
              An outline of my time travelling during a Europe trip with some of my
              friends.
            </p>
          </div>
        </Parallax>

        <Parallax speed={-1}>
          <div
            className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className={styles.content}>
              <p>
                I recall my time in Paris, Pamplona, and Barcelona as well as some
                of the mishaps that happened along the way.
              </p>
              <p>
                Some of the revisions I made to my final draft include: reordering
                of paragraphs to create a natural chronological flow which improves
                idea development, replacing unnecessarily granular details with
                higher level ideas to better support the thesis, and diversified
                word choice to improve engagement.
              </p>
            </div>
          </div>
        </Parallax>

        <Parallax speed={1}>
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
        position={{ bottom: '10%', right: '5%' }}
        speed={0.35}
        opacity={0.5}
      />
    </section>
  );
};

export default TravelNarrative;
