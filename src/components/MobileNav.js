import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@awesome.me/kit-bc1b6271da/icons/classic/solid";

const MobileNav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button
        onClick={() => setToggle(!toggle)}
        className="text-sm font-semibold custom-text-darkblue lg:hidden"
      >
        <FontAwesomeIcon icon={faBars} className="text-xl" />
      </button>
      {toggle && (
        <>
          <nav className="lg:flex gap-6 text-md font-semibold custom-text-darkblue absolute max-w-screen max-h-screen flex flex-col top-0 left-0 right-0 bg-white p-16 items-center shadow-lg z-10 rounded-lg">
            <button
              onClick={() => setToggle(!toggle)}
              className="text-sm font-semibold lg:hidden flex items-center gap-2 custom-bg-darkblue text-white p-4 rounded-lg"
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="text-xl custom-text-green"
              />{" "}
              Close Menu
            </button>
            <a className="p-2" href="/services">
              Services
            </a>
            <a className="p-2" href="/plans">
              Plans
            </a>
            <a className="p-2" href="/menu">
              Menu
            </a>
            <a className="p-2" href="/strainfinder">
              Strainfinder&trade;
            </a>
            <a className="p-2" href="/help">
              Help
            </a>
          </nav>
        </>
      )}
    </div>
  );
};

export default MobileNav;
