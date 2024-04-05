import React, { useContext } from "react";
import { styles } from "../../styles/styles";
import { GlobalContext } from "../../context/GlobalContext";
import { Logo, LogoDark } from "../../assets/export";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = () => {
  const { palette, theme, setTheme } = useContext(GlobalContext);
  return (
    <div
      className={`w-full h-20  flex justify-between items-center ${styles?.paddingHorizontal}`}
      style={{ background: palette?.background }}
    >
      <img src={theme == "dark" ? LogoDark : Logo} className="h-16" />
      <ThemeToggleBtn />
    </div>
  );
};

export default Navbar;
