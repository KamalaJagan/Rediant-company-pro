import React from "react";
const FooterLinks = [
  {
    title: "Web Builder",
    line: "/#webbuilder",
  },
  {
    title: "Hosting",
    line: "/#hosting",
  },
  {
    title: "Data Center",
    line: "/#datacenter",
  },
  {
    title: "Robotic-Automation",
    line: "/#robot",
  },
];
const FooterContactLinks = [
  {
    title: "Contact",
    line: "/#contact",
  },
  {
    title: "Privacy Policy",
    line: "/#policy",
  },
  {
    title: "Terms Of Services",
    line: "/#services",
  },
  {
    title: "Catagories",
    line: "/#catagories",
  },
  {
    title: "About",
    line: "/#about",
  },
];
const FooterDropdownLinks = [
  {
    title: "Contact",
  },
  {
    title: "Privacy Policy",
  },
  {
    title: "Terms Of Services",
  },
  {
    title: "Catagories",
  },
  {
    title: "About",
  },
];

const Footer = () => {
  return (
    <div
      data-aos="zoom-in"
      className="grid md:grid-cols-3 bottom-fixed mt-10 bg-black text-white justify-items-center pb-10 pt-5"
    >
      <div className="">
        <div className="py-8 ">
          <h1 className="sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3">
            CATAGORIES
          </h1>
          <ul>
            {FooterLinks.map((link) => (
              <li
                className="cursor-pointer hover:text-primary px-1 hover:translate-x-1 duration-300"
                key={link.title}
              >
                <span>{link.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="py-8">
          <h1 className="sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3">
            CONTACT
          </h1>
          <ul>
            {FooterContactLinks.map((link) => (
              <li
                className="cursor-pointer hover:text-primary px-1 hover:translate-x-1 duration-300"
                key={link.title}
              >
                <span>{link.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-20 justify-items-center text-center">
        <button
          type="button"
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="bg-white text-black w-40 h-10 text-center inline-flex items-center text-sm px-5 py-2.5 rounded-lg font-medium"
        >
          United States
          <svg
            class="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdown"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {FooterDropdownLinks.map((link) => (
              <li
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                key={link.title}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
