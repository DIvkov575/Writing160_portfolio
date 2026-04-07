import { FC, useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import CloudLayer from '../Hero/CloudLayer';
import styles from './CriticalReview.module.css';

const CriticalReview: FC = () => {
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
    <section id="critical-review" className={styles.section} ref={sectionRef}>
      {/* Background Clouds */}
      <CloudLayer
        size="large"
        position={{ top: '5%', right: '8%' }}
        speed={0.12}
        opacity={0.38}
      />
      <CloudLayer
        size="medium"
        position={{ top: '40%', left: '5%' }}
        speed={0.18}
        opacity={0.42}
      />
      <CloudLayer
        size="small"
        position={{ bottom: '30%', right: '12%' }}
        speed={0.22}
        opacity={0.48}
      />

      <div className={styles.container}>
        <Parallax speed={-4}>
          <div className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}>
            <h2 className={styles.title}>Reel Travel Podcast</h2>
          </div>
        </Parallax>

        <Parallax speed={-2}>
          <div
            className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <p className={styles.subtitle}>
              A critical review of travel content on Instagram — written script and recorded podcast
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
                With Chase, Brennan, Jacob, and Sean, I co-hosted "Reel Travel" — a podcast
                critically examining five Instagram travel accounts, including @traveler (2.9M followers),
                Helene in Between, Caiden Jackson, Travel and Leisure, and @worldgeoo.
              </p>
              <p>
                We analyzed how these creators use aesthetics, monetization, and selective
                framing to shape audience expectations — often contributing to overtourism and
                a distorted picture of what travel actually looks like.
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
              <span className={styles.tag}>Mar 2026</span>
              <a
                href="/reel-travel-podcast.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pdfLink}
              >
                ↗ View Script
              </a>
            </div>
          </div>
        </Parallax>
      </div>

      {/* Foreground Clouds */}
      <CloudLayer
        size="medium"
        position={{ bottom: '15%', left: '8%' }}
        speed={0.32}
        opacity={0.52}
      />
      <CloudLayer
        size="small"
        position={{ top: '60%', right: '15%' }}
        speed={0.38}
        opacity={0.48}
      />
    </section>
  );
};

export default CriticalReview;
