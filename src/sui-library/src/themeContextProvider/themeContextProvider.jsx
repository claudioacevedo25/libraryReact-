import React, { useState, createContext, useEffect } from "react";
import "./themeContextProvider.css"
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [mode, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme =JSON.parse(localStorage.getItem("themeMode"))
    savedTheme && setTheme(savedTheme)
  }, [])

  const toggleTheme = () => {
    localStorage.setItem("themeMode", JSON.stringify(mode === "dark" ? "light" : "dark"))
    setTheme(mode === "dark" ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setTheme: toggleTheme
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