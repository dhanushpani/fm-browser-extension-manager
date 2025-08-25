import React from "react";

const Header = ({ darkMode, onThemeChanges }) => {
  return (
    <div className="w-full bg-neutral-0 dark:bg-neutral-600 p-2 rounded-lg flex justify-between">
      <img src="/images/logo.svg" alt="logo" />
      {!darkMode ? (
        <img
          src="/images/icon-moon.svg"
          alt="sub"
          onClick={() => onThemeChanges()}
          className="bg-neutral-100 px-3 cursor-pointer rounded-md hover:bg-neutral-200 active:border-2 border-red-400"
        />
      ) : (
        <img
          src="/images/icon-sun.svg"
          alt="sub"
          className="bg-neutral-500 px-3 cursor-pointer rounded-md hover:bg-neutral-800 active:border-2 border-red-400"
          onClick={() => onThemeChanges()}
        />
      )}
    </div>
  );
};

export default Header;
