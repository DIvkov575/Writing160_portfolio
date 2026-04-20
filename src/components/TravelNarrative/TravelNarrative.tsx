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
            <h2 className={styles.title}>Travel Literacy Narrative</h2>
          </div>
        </Parallax>

        <Parallax speed={-3}>
          <div
            className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <p className={styles.subtitle}>
              A personal narrative about traveling through Europe (Paris, Pamplona,
              Barcelona, and Madrid) and learning to let go of control.
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
                A lifelong over-planner, I found myself on a friend-group trip through
                Europe where spontaneity ruled. From sleeping on the floor of Pamplona's
                starting plaza during San Fermín, to stumbling into the Museo del Prado
                after a storm stranded us in unplanned Madrid, the best moments came
                from mishaps, not the itinerary.
              </p>
              <p>
                Revisions to the final draft focused on reordering paragraphs for
                chronological clarity, replacing overly granular detail with higher-level
                reflection to better support the central thesis, and varying sentence
                structure to improve engagement.
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
              <span className={styles.tag}>Feb 2026</span>
              <a
                href="/travel-narrative.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pdfLink}
              >
                ↗ View Essay
              </a>
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
