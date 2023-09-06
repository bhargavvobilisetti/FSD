import './App.css';
import Home from './home';
import About from './about';
import Person from './person';
import Services from './services';
import Contact from './contact';
import Menu from './menu';
import Events from './events';
import Trainees from './trainees';
import Student from './student';
import BackgroundColorChanger from './background'
import Events1 from './events1';
//import { trainee,a } from './person';

import { BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  // console.log(trainee)
  //  console.log(a)
  return (
    <div className='App'>
      &nbsp;
    <BrowserRouter>
    <Menu/>
    <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/person" element={<Person name='bhargav' rollno='1234'/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/trainees" element={<Trainees/>}/>
          <Route path="/student" element={<Student/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/events1" element={<Events1/>}/>
          <Route path="/backgroundColorChanger" element={<background/>}/>
          

    </Routes>
    </BrowserRouter>
       {/* <Home/>
       <About/>
       <trainee/>
       <Services/>
       <Contact/>
       <img src='logo192.png'></img> */}
    </div>
  );
}

export default App;