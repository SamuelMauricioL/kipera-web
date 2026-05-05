import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import OnboardingFlow from './components/OnboardingFlow';
import AppFunctions from './components/AppFunctions';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen w-full bg-[#D9AE71] selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <OnboardingFlow />
      <AppFunctions />
      <Achievements />
      <Footer />
    </main>
  );
}
