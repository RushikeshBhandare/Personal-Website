import React from 'react'

import ContactMe from './components/ContactMe';
import HomePage from './components/HomePage';
import OtherSkills from './components/OtherSkills';
import SiteFooter from './components/SiteFooter';
import SkillPage from './components/SkillsPage';
import Work from './components/Work';

import GetWindowSize from './components/GetWindowSize';

function App() {
  const [height, width] = GetWindowSize()
 
  return (
    <div>
      <HomePage/> 
      
      <Work/>
      <SkillPage/>
      <OtherSkills/> 
      <ContactMe/>
      <SiteFooter/>
    </div>
  );
}

export default App;