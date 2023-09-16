import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from './Utils/ThemeContext';
import { ThemeProvider } from './Utils/ThemeContext';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {
  const {theme, handleTheme} = useContext(ThemeContext);

  return (


    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/Contact">Contacto</Link>
      <Link to="/Favs">Favoritos</Link>
      <button onClick={handleTheme} value="claro">Change theme</button>
    </nav>

  );
}

export default Navbar;