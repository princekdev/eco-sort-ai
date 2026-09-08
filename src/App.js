import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WasteChecker from './pages/WasteChecker';
import AIAssistant from './pages/AIAssistant';
import AIWorkflow from './pages/AIWorkflow';
import WasteCategories from './pages/WasteCategories';
import SustainabilityTips from './pages/SustainabilityTips';
import ImpactDashboard from './pages/ImpactDashboard';
import DesignThinking from './pages/DesignThinking';
import ResponsibleAI from './pages/ResponsibleAI';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-root">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/"                  element={<Home />} />
            <Route path="/waste-checker"     element={<WasteChecker />} />
            <Route path="/ai-assistant"      element={<AIAssistant />} />
            <Route path="/ai-workflow"       element={<AIWorkflow />} />
            <Route path="/waste-categories"  element={<WasteCategories />} />
            <Route path="/tips"              element={<SustainabilityTips />} />
            <Route path="/impact"            element={<ImpactDashboard />} />
            <Route path="/design-thinking"   element={<DesignThinking />} />
            <Route path="/responsible-ai"    element={<ResponsibleAI />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
