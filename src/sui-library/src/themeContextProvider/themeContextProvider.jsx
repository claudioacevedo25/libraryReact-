import React, { useState, createContext } from "react";
import "./themeContextProvider.css"
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [mode, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider
      value={{
        mode,
        setTheme: () => setTheme(mode === "dark" ? "light" : "dark")
      }}
    >
      <div theme={mode}
      className={'theme_context_provider'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};


export default ThemeContextProvider;