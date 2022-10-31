import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { Home } from "./Components/Home";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="footer" element={<Footer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
