import React, { useState, createContext, useContext } from "react";
const StateContext = createContext();
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [currentColor, setCurrentColor] = useState("#03c9d7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [isClicked, setIsClicked] = useState(initialState);
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false)

  };
  const setColor = (e) => {
    setCurrentColor(e);
    localStorage.setItem("colorMode", e);
    setThemeSettings(false)
  };
  const [screenSize, setScreenSize] = useState(undefined);  
  const [themeSettings, setThemeSettings] = useState(false);
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        themeSettings,
        isClicked,
        setIsClicked,
        setThemeSettings,
        initialState,
        screenSize,
        setScreenSize,
        currentColor, currentMode, setCurrentColor, setCurrentMode, setMode, setColor
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
