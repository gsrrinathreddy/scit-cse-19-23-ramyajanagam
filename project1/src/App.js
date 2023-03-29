import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Aboutme from './pages/Aboutme';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';
import Experience from './pages/Experience';
import Qualifications from './pages/Qualifications';
function App() {
  return (
    <div className="App">
        <Navbar/> 
        <Routes>
          <Route path="/About Me" element={<Aboutme/>}/>
          <Route path="/Skills" element={<Skills/>}/>
    
          <Route path="/Hobbies" element={<Hobbies/>}/>
          <Route path="/Experience" element={<Experience/>}/>
          <Route path="/Qualifications" element={<Qualifications/>}/>
          
          


        </Routes>
    </div>
  );
}

export default App;
