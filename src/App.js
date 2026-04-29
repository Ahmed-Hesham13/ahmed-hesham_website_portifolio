import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'; 
import Banner from './banner/banner';     
import { Skills } from './skills/skills';
import {Projects}  from './projects/projects';
import { Contact} from './contact/contact';
import { Newsletter } from './newsletter.js/newsletter';
import { Footer } from './footer/footer';
function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Banner />
      <Skills />
      <Projects/>
      <Contact/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;