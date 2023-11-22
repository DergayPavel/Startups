import './App.css';
import Header from './header/header.js'
import WeCreate from './weCreate/weCreate.js';
import AboutUs from './aboutUs/aboutUs.js';
import Problems from './problems/problems.js';
import Values from './values/values.js';
import Projects from './Projects/projects.js';
import StartupsCreate from './startupsCreate/startupsCreate.js';
import Openings from './openings/openings.js';
import Form from './form/form.js';
import Footer from './footer/footer.js';

function App() {
  return(
    <>
      <Header/>
      <WeCreate/>
      <AboutUs/>
      <Problems/>
      <Values/>
      <Projects/>
      <StartupsCreate/>
      <Openings/>
      <Form/>
      <Footer/>
    </>
  ) ;
}

export default App;
