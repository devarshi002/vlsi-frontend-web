import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import BackgroundLayers from './components/BackgroundLayers';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import InsightsPage from './pages/InsightsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div className="relative bg-space-900 font-exo text-slate-200 overflow-x-hidden min-h-screen">
      <BackgroundLayers />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"          element={<HomePage />} />
          <Route path="/about"     element={<AboutPage />} />
          <Route path="/services"  element={<ServicesPage />} />
          <Route path="/careers"   element={<CareersPage />} />
          <Route path="/contact"   element={<ContactPage />} />
          <Route path="/insights"  element={<InsightsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
