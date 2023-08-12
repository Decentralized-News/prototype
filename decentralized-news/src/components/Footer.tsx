import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={"flex mt-6 h-full items-end"}>
      <div
        className={
          "bg-gray-100 w-full mx-auto p-4 md:flex md:items-center md:justify-between h-16"
        }
      >
        <span
          className={"text-sm text-gray-500 sm:text-center dark:text-gray-400"}
        >
          {"2023 DecentNews. All Rights Reserved."}
        </span>
        <ul
          className={
            "flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
          }
        >
          <li className={"mr-10"}>
            <Link className="hover:underline" to={"/faq"}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/notice" className={"mr-4 hover:underline md:mr-6 "}>
              {"Legal Notice"}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
