import React from 'react'
import AboutMePage from './components/AboutMePage';
import ContactMe from './components/ContactMe';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import OtherSkills from './components/OtherSkills';
import Portfolio from './components/Portfolio';
import ScrolingWork from './components/ScrolingWork';
import SiteFooter from './components/SiteFooter';
import SkillPage from './components/SkillsPage';
import WorkForPc from './components/WorkForPc';

import GetWindowSize from './components/GetWindowSize';

function App() {
  const [height, width] = GetWindowSize()
  const renderWork = () =>{
      if(width > 500){
        return <WorkForPc/>
      }else{
        return <ScrolingWork/>
      }
  }
  return (
    <div>
      <HomePage/> 
      {renderWork()}
      <SkillPage/>
      <OtherSkills/> 
      <ContactMe/>
      <SiteFooter/>
    </div>
  );
}

export default App;