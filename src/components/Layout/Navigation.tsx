import { FC, useState, useEffect } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import styles from './Navigation.module.css';

const Navigation: FC = () => {
  const scrollPosition = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollPosition.y > 50);
  }, [scrollPosition.y]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={scrollToTop}>
          Cloud
        </div>
        <ul className={styles.links}>
          <li className={styles.link} onClick={scrollToTop}>
            Home
          </li>
          <li className={styles.link} onClick={() => scrollToSection('projects')}>
            Projects
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
