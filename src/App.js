import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation'; // Ensure correct import path
import './App.css'; 
import MissionVision from './components/mission'; // Import your mission component
import SlideImage from './components/slideimage';
import HomePage from './components/home';
import Footer from './components/footer'; // Import your Footer component
import Outdonar from './components/outdonors';
import History from './components/history';
import FutureProspects from './components/prospects';
import ContactUs from './components/contact';
import Education from './components/education';
import YoungMothers from './components/youngMother';
import YouthEmpowerment from './components/youth';
import Elderly from './components/elderly';
import Prison from './components/prison';
import Indonor from './components/indonor';
import GalleryPage from './components/gallery';
import Dashboard from './components/dashboard';

// Temporary placeholder components

const Indonors = () => <div>Indonors Page</div>;

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        {/* Home page with SlideImage */}
        <Route 
          path="/" 
          element={
            <>
              <SlideImage />  {/* SlideImage only appears on the home page */}
              <HomePage />
            </>
          } 
        />
        {/* Other pages without SlideImage */}
        <Route path="/history" element={<History />} />
        <Route path="/mission" element={<MissionVision />} />
        <Route path="/future-prospects" element={<FutureProspects />} />
        <Route path="/indonors" element={<Indonors />} />
        <Route path="/outdonors" element={<Outdonar />} />
        <Route path="/prospects" element={<FutureProspects />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/education" element={<Education />} />
        <Route path="/youngMother" element={<YoungMothers />} />
        <Route path="/youth" element={<YouthEmpowerment />} />
        <Route path="/elderly" element={<Elderly />} />
        <Route path="/prison" element={<Prison />} />
        <Route path="/indonor" element={<Indonor />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer /> {/* Add the Footer here */}
    </Router>
  );
};

export default App;
