import React from 'react'
import AboutMePage from './components/AboutMePage';
import ContactMe from './components/ContactMe';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import OtherSkills from './components/OtherSkills';
import SiteFooter from './components/SiteFooter';
import SkillPage from './components/SkillsPage';


function App() {
  return (
    <div>
      <HomePage/> 
      <SkillPage/>
      <OtherSkills/> 
      <SiteFooter/>
    </div>
  );
}

export default App;