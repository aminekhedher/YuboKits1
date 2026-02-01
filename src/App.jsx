import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Lazy Load Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const RoboticsPlatformPage = lazy(() => import('./pages/RoboticsPlatformPage'));
const WorkshopsPage = lazy(() => import('./pages/WorkshopsPage'));

const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));

// Placeholder components for other routes to prevent errors until built
const PlaceholderPage = ({ title }) => (
  <div style={{
    padding: '100px 20px',
    textAlign: 'center',
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }}>
    <h1 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>{title}</h1>
    <p>This page is currently under construction.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />

        <Suspense fallback={
          <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            Loading...
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/robotics-platform" element={<RoboticsPlatformPage />} />
            <Route path="/workshops" element={<WorkshopsPage />} />
            <Route path="/3d-printing" element={<PlaceholderPage title="3D Printing (Coming Soon)" />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
