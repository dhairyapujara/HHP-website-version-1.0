import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import InsightsPage from './pages/InsightsPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import RegulatoryDisclosures from './pages/RegulatoryDisclosures';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface text-on-surface font-body antialiased flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/regulatory" element={<RegulatoryDisclosures />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
