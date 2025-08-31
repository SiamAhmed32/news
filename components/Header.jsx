import React from "react";
import Logo from "./Logo";
import Subscribe from "./Subscribe";
import NavbarButtons from "./NavbarButtons";

const Header = ({ lang, dictionary }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-6">
          <Subscribe />
          <NavbarButtons lang={lang} dictionary={dictionary} />
        </div>
      </div>
    </header>
  );
};

export default Header;
