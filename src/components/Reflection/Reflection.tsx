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
              Looking back on writing 160...
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
                Reflection content will be added here.
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
              <span className={styles.tag}>2025</span>
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
