import './App.css';
import Home from './pages/Home';
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import {  BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='pages/About' element={<About />}></Route>
          <Route path='pages/ContactUs' element={<ContactUs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;