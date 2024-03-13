import React from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";
function Header() {
  return (
    <header>
      <div className="grid grid-cols-1 p-10 items-center">
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            {" "}
            <span className="underline decoration-6 decoration-orange-400">
              MinjaAI
            </span>{" "}
            News
          </h1>
        </Link>
      </div>
      {/* Nav Links */}
      <NavLinks />
      {/* Search Bar */}
      <SearchBox />
    </header>
  );
}

export default Header;
