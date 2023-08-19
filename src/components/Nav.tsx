import { useState } from "react";

import data, { URL } from "../data";
import NavLink from "./NavLink";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-20">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
          text-gray-800"
        >
          <span className="mr-1 pt-2">
            <img
              src={`${URL}/img/APD_LogoEVA.png`}
              className="h-20 mr-3 w-20 md:h-24 md:w-24"
              alt={`Logo ${data.info.web_name}`}
            />
          </span>
        </div>

        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <i className={`fa-solid fa-${!openMenu ? "bars" : "xmark"} w-5`} />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
            openMenu ? "top-24 " : "top-[-490px]"
          }`}
        >
          {data.ui.menu.map(({id, link}, index) => (
            <NavLink key={index} link={link} offset={-130} to={id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
