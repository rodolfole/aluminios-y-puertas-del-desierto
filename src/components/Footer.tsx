import { Link } from "react-scroll";

import data, { URL } from "../data";

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-900 rounded-lg shadow md:px-6 md:py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <img
            src={`${URL}/img/APD_LogoEVA_Single.png`}
            className="h-28 mr-3"
            alt={`Logo ${data.info.web_name}`}
          />
        </div>
        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          {data.info.social.map(({ icon, url }, index) => (
            <li key={index}>
              <a
                className="text-primary-100 transition hover:text-primary-200"
                href={url}
                rel="noreferrer"
                target="_blank"
              >
                <i className={`${icon} fa-2x`}></i>
              </a>
            </li>
          ))}
        </ul>
        <div className="top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
          <Link
            className="cursor-pointer flex justify-center items-center rounded-full bg-primary-100 p-2 text-white shadow transition hover:bg-primary-200 sm:p-3 lg:p-4 h-12 w-12"
            offset={-150}
            smooth
            to="hero"
          >
            <i className="fa-solid fa-angle-up" />
          </Link>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex justify-around">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; {new Date().getFullYear()} &nbsp;
          {data.info.web_name}. Todos los derechos Reservados.
        </span>
        <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Powered by{" "}
          <a
          className="text-primary-100"
            href="https://desarrollo.siemex.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            SIEMEX
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
