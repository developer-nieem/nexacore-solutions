import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const menu = [
    {
      id: 1,
      slug: "/",
      title: "Home",
    },
    {
      id: 2,
      slug: "/about-us",
      title: "About Us",
    },
    {
      id: 3,
      slug: "/services",
      title: "Services",
    },
    {
      id: 4,
      slug: "/portfolio",
      title: "Portfolio",
    },
    {
      id: 5,
      slug: "/blog",
      title: "Blog",
    },
    {
      id: 6,
      slug: "/contact",
      title: "Contact",
    },
  ];

  return (
    <nav className="w-[1170]">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu.map((item) => (
                <li key={item.id}>
                  {" "}
                  <Link to={item.slug}> {item.title} </Link>{" "}
                </li>
              ))}
            </ul>
          </div>
          <Link to="/">
            {" "}
            <img src="/nexa-logo.png" alt="logo" />{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {
             menu.map((item) => (
                <li key={item.id}>
                  {" "}
                  <Link className="text-[14px] font-semibold" to={item.slug}> {item.title} </Link>{" "}
                </li>
              ))
           }
            
          </ul>
        </div>
        <div className="navbar-end">
          <Button title='Work With Us'></Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
