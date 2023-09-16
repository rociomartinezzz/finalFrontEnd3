
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Routes/Contact";
import Home from "./Components/Routes/Home";
import Detail from "./Components/Routes/Detail";
import Favs from "./Components/Routes/Favs";
import {Routes, Route} from 'react-router-dom';
import { ThemeProvider } from "./Components/Utils/ThemeContext";
import Card from "./Components/Card";




function App() {



  return (
    <>
    <ThemeProvider>
  
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<Detail/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/favs" element={<Favs/>} />
      </Routes>
      <Card/>
      <Footer />
      </ThemeProvider>
    </>

  );
}

export default App;