import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './Pages/HomeScreen/HomeScreen';
import DetailScreen from './Pages/Details/DetailScreen';
import About from './Pages/About/AboutScreen';

function App() {
  return (
        <BrowserRouter>
        <Routes>
         <Route path="/" element={<HomeScreen/>}/>
         <Route path="/details" element={<DetailScreen/>}/>
         <Route path="/about" element={<About/>}/>
        </Routes>
        </BrowserRouter>
        
  );
}

export default App;
