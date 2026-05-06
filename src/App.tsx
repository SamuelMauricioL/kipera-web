import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#D9AE71] selection:bg-black selection:text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </div>
  );
}
