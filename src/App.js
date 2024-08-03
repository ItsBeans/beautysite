
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Quick from './Quick';
import BioRepeel from './BioRepeel';
import Dermaplanning from './Dermaplanning';
import Mesotherapy from './Mesotherapy';
import Microneedling from './Microneedling';
import Personalised from './Personalised';
import SkinBoost from './SkinBoost';
import NoPage from './NoPage';
import About from './About';

export default function App() {
  return (
    
    <div>
        <Router>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/quick" element={<Quick/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/biorepeel" element={<BioRepeel/>}/>
            <Route path="/dermaplanning" element={<Dermaplanning/>}/>
            <Route path="/mesotherapy" element={<Mesotherapy/>}/>
            <Route path="/microneedling" element={<Microneedling/>}/>
            <Route path="/personalised" element={<Personalised/>}/>
            <Route path="/skinboost" element={<SkinBoost/>}/>
            <Route path="*" element={<NoPage/>}/>

          </Routes>
        </Router>
    </div>
   




  )
}


