
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Routes/Contact";
import Home from "./Components/Routes/Home";
import Detail from "./Components/Routes/Detail";
import Favs from "./Components/Routes/Favs";
import {Routes, Route} from 'react-router-dom';
import { ThemeProvider } from "./Components/Utils/ThemeContext";





function App() {



  return (
    <>
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Detail/:id" element={<Detail/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/favs" element={<Favs/>} />
      </Routes>
      <Footer />
      </ThemeProvider>
    </>

  );
}

export default App;