import React, { useContext } from "react";
import { styles } from "../../styles/styles";
import { GlobalContext } from "../../context/GlobalContext";
import { Logo, LogoDark } from "../../assets/export";
import { CiBrightnessDown } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";

const ThemeToggleBtn = () => {
  const { palette, theme, setTheme } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      className={`${
        theme == "light" ? "bg-blue-500/[0.2]" : "bg-[#A9A1D7]/[0.18]"
      } rounded-full transition-all duration-300 w-[60px] h-[30.5px] p-[2px] flex justify-start items-center`}
    >
      <span
        className={`h-7 w-7 text-xl text-white transition-all duration-300 rounded-full flex items-center justify-center ${
          theme == "light"
            ? "translate-x-0 bg-blue-500"
            : "translate-x-[calc(100%-5%)] bg-[#342A6D]"
        } `}
      >
        {theme == "light" ? <CiBrightnessDown /> : <IoMoon />}
      </span>
    </button>
  );
};

export default ThemeToggleBtn;
