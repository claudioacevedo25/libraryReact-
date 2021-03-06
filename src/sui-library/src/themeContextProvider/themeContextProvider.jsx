import React, { useState, createContext } from "react";
import "./themeContextProvider.css"
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children, onThemeChange, initialTheme }) => {
  const [mode, setTheme] = useState(initialTheme);

  const toggleTheme = (theme) => {
    onThemeChange && onThemeChange()
    if (!theme || typeof theme !== 'string') {
      setTheme(mode === "dark" ? "light" : "dark")
    } else {
      setTheme(theme)
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setTheme: toggleTheme
      }}
    >
      <div
        theme={mode}
        className={'theme__context__provider'}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.defaultProps = {
  initialTheme: "dark",
};


export default ThemeContextProvider;