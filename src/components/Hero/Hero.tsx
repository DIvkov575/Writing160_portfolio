import { FC } from 'react';
import CloudLayer from './CloudLayer';
import FloatingText from './FloatingText';
import styles from './Hero.module.css';

const Hero: FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      {/* Background Clouds - Slowest movement */}
      <CloudLayer
        size="large"
        position={{ top: '5%', left: '10%' }}
        speed={0.1}
        opacity={0.4}
      />
      <CloudLayer
        size="medium"
        position={{ top: '15%', right: '15%' }}
        speed={0.15}
        opacity={0.5}
      />
      <CloudLayer
        size="large"
        position={{ bottom: '10%', left: '20%' }}
        speed={0.12}
        opacity={0.3}
      />

      {/* Midground Clouds */}
      <CloudLayer
        size="medium"
        position={{ top: '40%', left: '5%' }}
        speed={0.25}
        opacity={0.45}
      />
      <CloudLayer
        size="small"
        position={{ top: '60%', right: '10%' }}
        speed={0.3}
        opacity={0.6}
      />

      {/* Main Content */}
      <div className={styles.content}>
        <FloatingText speed={-3} delay={100}>
          <h1 className={styles.title}>Dmitriy Ivkov</h1>
        </FloatingText>

        <FloatingText speed={-1} delay={300}>
          <p className={styles.subtitle}>
            Hi, welcome to my portfolio. I'm Dmitriy, a math and computer science student at the University of Michigan—currently enrolled in Writing 160 (Travel) class. I'm building this portfolio to showcase some of my work from Writing 160, and maybe my programming projects once I complete the semester. I took 160 because I thought that I'd enjoy the small format and because I wanted to become a more mindful traveller.
          </p>
        </FloatingText>

        <FloatingText speed={2} delay={500}>
          <div className={styles.scrollIndicator} onClick={scrollToProjects}>
            <span>↓</span>
          </div>
        </FloatingText>
      </div>

      {/* Foreground Clouds - Fastest movement */}
      <CloudLayer
        size="small"
        position={{ bottom: '20%', right: '8%' }}
        speed={0.4}
        opacity={0.55}
      />
      <CloudLayer
        size="medium"
        position={{ top: '25%', right: '5%' }}
        speed={0.35}
        opacity={0.4}
      />
    </section>
  );
};

export default Hero;
