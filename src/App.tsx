import { FC } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from './components/Layout/Navigation';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import ScrollProgress from './components/ParallaxLayers/ScrollProgress';

const App: FC = () => {
  return (
    <ParallaxProvider>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <Projects />
      </main>
    </ParallaxProvider>
  );
};

export default App;
