import { FC } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from './components/Layout/Navigation';
import Hero from './components/Hero/Hero';
import TravelNarrative from './components/TravelNarrative/TravelNarrative';
import CriticalReview from './components/CriticalReview/CriticalReview';
import ResearchProject from './components/ResearchProject/ResearchProject';
import Reflection from './components/Reflection/Reflection';
import ScrollProgress from './components/ParallaxLayers/ScrollProgress';
import FloatingCloud from './components/ParallaxLayers/FloatingCloud';
import FloatingAirplane from './components/ParallaxLayers/FloatingAirplane';

const App: FC = () => {
  return (
    <ParallaxProvider>
      <ScrollProgress />
      <Navigation />

      {/* Animated SVG clouds floating across the screen */}
      <FloatingCloud size="large" speed="slow" position="top" delay={0} color="#E8F4F8" />
      <FloatingCloud size="medium" speed="medium" position="middle" delay={15} color="#B8D8E8" />
      <FloatingCloud size="small" speed="fast" position="bottom" delay={8} color="#E8F4F8" />
      <FloatingCloud size="medium" speed="slow" position="top" delay={35} color="#D0E8F0" />
      <FloatingCloud size="large" speed="medium" position="middle" delay={50} color="#B8D8E8" />
      <FloatingCloud size="small" speed="fast" position="top" delay={25} color="#E8F4F8" />
      <FloatingAirplane size="medium" speed="slow" position="top" delay={10} />
      <FloatingAirplane size="small" speed="medium" position="middle" delay={60} />

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
