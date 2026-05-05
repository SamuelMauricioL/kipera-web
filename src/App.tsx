import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AppFunctions from './components/AppFunctions';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen w-full bg-[#D9AE71] selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <AppFunctions />
      <Footer />
    </main>
  );
}
