import logo from './logo.svg';
import './App.css';
import { FaBeer } from "react-icons/fa";
import Data from './components/data';
import Submit from './components/submit';
import Mainpage from './components/mainpage';

import Skills from './components/navbar/skills';
import About from './components/navbar/about';
import Education from './components/navbar/education';
import Contact from './components/navbar/contact';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    {/* //   <h3>
    //   {" "}
    //   Lets go for a <FaBeer />?{" "}
    // </h3> */}
      <Router>
      <Routes>
        <Route exact path='/' element={<Mainpage/>}/>
        <Route exact path='/data' element={<Data/>}/>
        <Route exact path='/submit' element={<Submit/>}/>
        <Route exact path='/skills' element={<Skills/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/education' element={<Education/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
     </Router>
     
    </div>
  );
}

export default App;
