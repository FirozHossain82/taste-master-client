import React, { useContext, useEffect, useState } from "react";
import { FaUserCircle, FaSun, FaMoon } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider.jsx";

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .catch(error =>{
            console.log(error.message)
        }) 
    }

    // theme toggle
    const [theme, setTheme]  = useState('light');
    const [themeIcon, setThemeIcon] = useState(true);

    const handleToggleTheme = () =>{
        setTheme(theme ==="light"? "dark": "light");
        setThemeIcon(!themeIcon);
    }
    useEffect(() =>{
        document.documentElement.setAttribute("data-theme", theme);
    },[theme])

  return (
    <div className="border-b-2 bg-gray-100">
      <div className="navbar container mx-auto p-3 sm:p-5">
        <div className="navbar-start">
          <div className="dropdown font-bold ">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-100 rounded-box w-56 "
            >
              <li>
                <NavLink
                  to="/"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive }) =>
                    isActive ? "border-2 border-emerald-400" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  aria-label="Blog"
                  title="Blog"
                  className={({ isActive }) =>
                    isActive ? "border-2 border-emerald-400" : "default"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  aria-label="About"
                  title="About"
                  className={({ isActive }) =>
                    isActive ? "border-2 border-emerald-400" : "default"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  aria-label="Contact"
                  title="Contact"
                  className={({ isActive }) =>
                    isActive ? "border-2 border-emerald-400" : "default"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link className="normal-case font-semibold font-serif text-xl text-blue-900 sm:text-2xl p-0">
             Taste Master
          </Link>
        </div>
        <div className="navbar-center font-bold  hidden lg:flex">
          <ul className="menu menu-horizontal px-2">
            <li>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? " border-2 border-emerald-400" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                aria-label="Blog"
                title="Blog"
                className={({ isActive }) => (isActive ? "border-2 border-emerald-400" : "default")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                aria-label="About"
                title="About"
                className={({ isActive }) => (isActive ? "border-2 border-emerald-400" : "default")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                aria-label="Contact"
                title="Contact"
                className={({ isActive }) => (isActive ? "border-2 border-emerald-400" : "default")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          <div>
            {user ? (
              <Link
                onClick={handleLogOut}
                className="my-btn hover:bg-transparent transition-colors font-bold duration-200 ease-in-out"
              >
                LogOut
              </Link>
            ) : (
              <Link
                to="/login"
                className=" my-btn hover:bg-transparent hover:text-black transition-colors duration-200 ease-in-out"
              >
                Login
              </Link>
            )}
          </div>
          {user && (
            <div
              className="tooltip tooltip-left"
              data-tip={user?.displayName || "Anonymous User"}
            >
              <Link to="/user">
                {user?.photoURL ? (
                  <img
                    src={user?.photoURL}
                    className="w-8 h-8 sm:w-12 sm:h-12 rounded-[50%] border-2 border-blue-600 object-cover object-center"
                    alt={user?.displayName}
                  />
                ) : (
                  <FaUserCircle className="w-8 h-8 sm:w-12 sm:h-12" />
                )}
              </Link>
            </div>
          )}
          <div>
            <button
              className="w-7 h-7 sm:w-10 sm:h-10 text-lg flex justify-center items-center rounded-[50%] bg-blue-300"
              onClick={handleToggleTheme}
              title={themeIcon ? "Light" : "dark"}
            >
              {themeIcon ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

