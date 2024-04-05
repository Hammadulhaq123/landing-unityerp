import React, { useContext } from "react";
import { styles } from "../../styles/styles";
import { GlobalContext } from "../../context/GlobalContext";
import { HeroMain } from "../../assets/export";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  const { theme, palette } = useContext(GlobalContext);
  return (
    <div
      className={`${styles?.paddingHorizontal} w-full flex justify-center items-start gap-4 h-[calc(100vh-5rem)] ${styles?.paddingVertical} `}
      style={{
        color: palette?.color,
        background: palette?.background,
      }}
    >
      <span className="clip w-full h-screen absolute top-0 left-0 bg-black/[0.05]" />
      <div className="w-full flex flex-col gap-6 z-50 justify-start items-start md:w-1/2 h-auto">
        <span
          className="w-auto flex items-center justify-center text-sm px-5 h-8 font-medium rounded-full"
          style={{
            border: `2px solid ${palette?.dark_contrast_color}`,
            color: palette?.dark_contrast_color,
          }}
        >
          Version 1.0 is here
        </span>
        <h1
          className="text-8xl font-extrabold "
          style={{ color: palette?.color }}
        >
          Pathway to <br />
          productivity
        </h1>

        <p
          className="text-lg my-3 font-medium"
          style={{ color: palette?.light_contrast_color }}
        >
          Celebrate the joy of accomplishment with an app <br /> designed to
          track your company's progress, motivate <br /> your efforts, and
          celebrate your successes.
        </p>

        <div className="w-auto flex gap-2 justify-start items-center">
          <button
            className="w-32 h-12 transition-all duration-200 animate-bounce hover:animate-none rounded-full flex items-center justify-center "
            style={{
              background: palette?.brand,
              color: palette?.background,
            }}
          >
            Get for Free
          </button>
          <button
            className="w-28 h-12 rounded-full transition-all duration-200 hover:scale-105 text-sm font-medium flex gap-1 items-center justify-center "
            style={{
              color: theme == "dark" ? "white" : "black",
              border: `2px solid ${palette?.brand}`,
            }}
          >
            <span>Learn More</span>
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 z-50 h-auto">
        <img src={HeroMain} className="" />
      </div>
    </div>
  );
};

export default Hero;
