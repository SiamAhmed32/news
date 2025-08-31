import Link from "next/link";

import LanguageSwitcher from "./LanguageSwitcher";

const NavbarButtons = ({lang, dictionary}) => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link
        href={`#`}
        className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
      >
        {dictionary.navbar.world}
      </Link>
      <Link
        href={`#`}
        className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
      >
        {dictionary.navbar.business}
      </Link>
      <Link
        href={`#`}
        className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
      >
        {dictionary.navbar.lifestyle}
      </Link>

      {/* <!-- Language Switcher --> */}
      <LanguageSwitcher lang = {lang}/>
    </nav>
  );
};

export default NavbarButtons;
