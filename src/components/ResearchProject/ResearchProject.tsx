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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="research-project" className={styles.section} ref={sectionRef}>
      {/* Background Clouds */}
      <CloudLayer size="large" position={{ top: '15%', left: '10%' }} speed={0.14} opacity={0.36} />
      <CloudLayer size="medium" position={{ top: '55%', right: '8%' }} speed={0.19} opacity={0.44} />
      <CloudLayer size="small" position={{ bottom: '25%', left: '12%' }} speed={0.24} opacity={0.46} />
      <CloudLayer size="small" position={{ top: '35%', right: '18%' }} speed={0.28} opacity={0.42} />

      <div className={styles.container}>
        <Parallax speed={-6}>
          <div className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}>
            <h2 className={styles.title}>Dying for Tourism</h2>
          </div>
        </Parallax>

        <Parallax speed={-4}>
          <div
            className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <p className={styles.subtitle}>
              How tourism growth in Lake Atitlán, Guatemala has contributed to measurable
              environmental decline
            </p>
          </div>
        </Parallax>

        <Parallax speed={-2}>
          <div
            className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: '0.35s' }}
          >
            <div className={styles.thesisBlock}>
              <span className={styles.thesisLabel}>Thesis</span>
              <p className={styles.thesisText}>
                Tourism growth at Lake Atitlán, Guatemala has outpaced the region's water treatment
                infrastructure, driving eutrophication of the lake and destabilizing the lakeshore
                communities that depend on its resources.
              </p>
            </div>
          </div>
        </Parallax>

        <Parallax speed={-1}>
          <div
            className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: '0.5s' }}
          >
            <div className={styles.content}>
              <p>
                I created an interactive website that visualizes the relationship between rising
                tourist numbers at Lake Atitlán and measurable environmental decline, tracking
                water transparency, oxygen levels, and cyanobacteria outbreaks over time. I have
                plans to travel to Guatemala and wanted to understand the environmental pressures on
                one of its most iconic destinations before I visit.
              </p>
            </div>
          </div>
        </Parallax>

        <Parallax speed={0}>
          <div
            className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: '0.6s' }}
          >
            <div className={styles.metadata}>
              <span className={styles.tag}>Apr 2026</span>
              <a
                href="https://160p3.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pdfLink}
              >
                ↗ View Multimodal Piece
              </a>
            </div>
          </div>
        </Parallax>


      </div>

      {/* Foreground Clouds */}
      <CloudLayer size="medium" position={{ bottom: '12%', right: '6%' }} speed={0.34} opacity={0.5} />
    </section>
  );
};

export default ResearchProject;
