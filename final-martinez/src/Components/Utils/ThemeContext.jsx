import { createContext, useState } from "react";

const ThemeContext = createContext();

const initialTheme = "claro";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    if (e.target.value === "claro") {
      setTheme("claro");
    } else {
      setTheme("oscuro");
    }
  };

  const data = {theme, handleTheme };

  return <ThemeContext.Provider value={data}>
    {children}
    </ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;