
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import Navbar from './Screen/Navbar';
import Home from './Screen/Home';
import History from  './components/History/History'
import Instrument from './components/Instruments/Instrument';
import Heritage from './components/Preserving/Heritage';
import Visit from './components/visit/Visit';
import Gallery from './components/Gallery/Gallery';
function App() {
  return (
<BrowserRouter>

<Routes>

<Route exact path = '/' element={<Home/>}></Route>
<Route exact path = '/history' element={<History/>}></Route>
<Route exact path = '/instruments' element={<Instrument/>}></Route>
<Route exact path = '/heritage' element={<Heritage/>}></Route>
<Route exact path = '/visit' element={<Visit/>}></Route>
<Route exact path = '/gallery' element={<Gallery/>}></Route>





</Routes>

</BrowserRouter>
  );
}

export default App;
