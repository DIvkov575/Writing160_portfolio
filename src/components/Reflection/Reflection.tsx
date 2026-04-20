import { FC, useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import CloudLayer from '../Hero/CloudLayer';
import styles from './Reflection.module.css';

const Reflection: FC = () => {
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
    <section id="reflection" className={styles.section} ref={sectionRef}>
      {/* Background Clouds - More layers for finale */}
      <CloudLayer
        size="large"
        position={{ top: '8%', right: '5%' }}
        speed={0.1}
        opacity={0.4}
      />
      <CloudLayer
        size="large"
        position={{ top: '20%', left: '8%' }}
        speed={0.13}
        opacity={0.38}
      />
      <CloudLayer
        size="medium"
        position={{ top: '45%', right: '12%' }}
        speed={0.17}
        opacity={0.45}
      />
      <CloudLayer
        size="medium"
        position={{ bottom: '30%', left: '10%' }}
        speed={0.21}
        opacity={0.42}
      />
      <CloudLayer
        size="small"
        position={{ top: '65%', left: '15%' }}
        speed={0.26}
        opacity={0.48}
      />
      <CloudLayer
        size="small"
        position={{ bottom: '20%', right: '18%' }}
        speed={0.3}
        opacity={0.5}
      />

      <div className={styles.container}>
        <Parallax speed={-7}>
          <div className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}>
            <h2 className={styles.title}>Reflection</h2>
          </div>
        </Parallax>

        <Parallax speed={-5}>
          <div
            className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <p className={styles.subtitle}>
              Looking back on Writing 160
            </p>
          </div>
        </Parallax>

        <Parallax speed={-3}>
          <div
            className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className={styles.content}>
              <p>
                The class covered three projects: a travel narrative about a Europe trip, a podcast
                critically examining Instagram travel accounts, and a research project on tourism's
                environmental impact at Lake Atitlán, Guatemala.
              </p>
              <p>
                The literacy narrative was the most personal. Writing about the Europe trip made me
                revisit parts of it I'd glossed over when telling the story out loud. The revision
                process was useful. I cut a lot of detail that didn't support the point. The podcast
                was a group project. Analyzing travel accounts on Instagram was interesting and made
                me think about how much of what makes a destination appealing is constructed.
              </p>
              <p>
                For the research project, I chose Lake Atitlán partly because I'm planning to
                travel there. Building the website was the most enjoyable part. It let me use some
                programming skills and present data more interactively than a regular essay would.
                The multimodal option made the assignment more interesting than it otherwise would
                have been.
              </p>
            </div>
          </div>
        </Parallax>

        <Parallax speed={-1}>
          <div
            className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: '0.6s' }}
          >
            <div className={styles.metadata}>
              <span className={styles.tag}>Apr 2026</span>
            </div>
          </div>
        </Parallax>
      </div>

      {/* Foreground Clouds */}
      <CloudLayer
        size="medium"
        position={{ bottom: '8%', left: '5%' }}
        speed={0.36}
        opacity={0.55}
      />
      <CloudLayer
        size="small"
        position={{ top: '75%', right: '8%' }}
        speed={0.4}
        opacity={0.52}
      />
    </section>
  );
};

export default Reflection;
