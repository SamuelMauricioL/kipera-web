import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import OnboardingFlow from '../components/OnboardingFlow';
import WidgetShowcase from '../components/WidgetShowcase';
import AppFunctions from '../components/AppFunctions';
import Achievements from '../components/Achievements';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <OnboardingFlow />
      <WidgetShowcase />
      <AppFunctions />
      <Achievements />
      <Footer />
    </>
  );
}
