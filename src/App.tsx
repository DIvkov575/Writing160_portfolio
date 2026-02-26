import { FC } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from './components/Layout/Navigation';
import Hero from './components/Hero/Hero';
import TravelNarrative from './components/TravelNarrative/TravelNarrative';
import CriticalReview from './components/CriticalReview/CriticalReview';
import ResearchProject from './components/ResearchProject/ResearchProject';
import Reflection from './components/Reflection/Reflection';
import ScrollProgress from './components/ParallaxLayers/ScrollProgress';

const App: FC = () => {
  return (
    <ParallaxProvider>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <TravelNarrative />
        <CriticalReview />
        <ResearchProject />
        <Reflection />
      </main>
    </ParallaxProvider>
  );
};

export default App;
