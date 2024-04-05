import Cookies from "js-cookie";
import React, { createContext, useState, useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  // Theme Toggle
  const [theme, setTheme] = useState("light");
  const [palette, setPalette] = useState({
    brand: "#fff",
    background: "#000",
    dark_contrast_background: "#0e0e10",
    light_contrast_background: "#1c1c1c",
    color: "#fff",
    dark_contrast_color: "#e0e0e0",
    light_contrast_color: "#959595",
  });

  useEffect(() => {
    if (theme == "dark") {
      setPalette({
        brand: "#fff",
        background: "#0e0e10",
        dark_contrast_background: "#222222",
        light_contrast_background: "#1c1c1c",
        color: "#fff",
        dark_contrast_color: "#e0e0e0",
        light_contrast_color: "#959595",
      });
    } else {
      setPalette({
        brand: "#000",
        background: "#fff",
        dark_contrast_background: "#F5F5F5",
        light_contrast_background: "#F9F9F9",
        color: "#000",
        dark_contrast_color: "#222222",
        light_contrast_color: "#1c1c1c",
      });
    }
  }, [theme]);

  return (
    <GlobalContext.Provider value={{ theme, setTheme, palette }}>
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};
