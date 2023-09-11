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
import BackgroundColorChanger from './BackgroundColorChanger';
import BackgroundImageSlider from './BackgroundImageSliders';
import Events1 from './events1';
import IncrementAndDecrement from './Increm-and-decre';
//import { trainee,a } from './person';
import Hooks from './hooks';
import Form from './form';
import Form1 from './form1';


import { BrowserRouter,Routes,Route, Router} from 'react-router-dom';


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
          <Route path="/BackgroundColorChanger" element={<BackgroundColorChanger/>}/>
          <Route path="/BackgroundImageSliders" element={<BackgroundImageSlider/>}/>
          <Route path='/IncrementAndDecrement' element={<IncrementAndDecrement/>}/>
          <Route path='Hooks'element={<Hooks/>}/>
          <Route path='Form'element={<Form/>}/>
          <Route path='Form1'element={<Form1/>}/>
          

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