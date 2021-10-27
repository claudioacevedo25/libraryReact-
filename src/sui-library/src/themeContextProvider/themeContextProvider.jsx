import React, { useState, createContext } from "react";
import "./themeContextProvider.css"
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children, onThemeChange, initialTheme }) => {
  const [mode, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    onThemeChange && onThemeChange()
    setTheme(mode === "dark" ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setTheme: toggleTheme
      }}
    >
      <div 
        theme={mode}
        className={'theme_context_provider'}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};


export default ThemeContextProvider;