import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';

const NavBar = () => {
  const [closeNav, setCloseNav] = useState(true);
  const activeLink = 'bg-gray-200 hover:bg-gray-200';

  return (
    <nav className="flex pt-5 flex-col z-40  items-start shadow-md sm:flex-row sm:justify-between sm:items-center w-full transform transition-all duration-500  top-0 h-auto sm:h-20">
      <Link to="/">
        <span className="text-4xl font-mono">Kore</span>
      </Link>
      <div
        className="absolute top-3 right-2 w-10 h-10 text-2xl sm:hidden cursor-pointer"
        onClick={() => setCloseNav(!closeNav)}
      >
        {closeNav ? <span>X</span> : <span>📃</span>}
      </div>
      <ul
        className={
          !closeNav
            ? 'sm:flex flex-col w-full sm:w-auto sm:justify-end sm:flex-row text-black transform transition-all duration-500 hidden'
            : 'sm:flex flex-col w-full sm:w-auto sm:justify-end sm:flex-row text-black transform transition-all duration-500'
        }
      >
        <NavLink
          to="/about"
          className={({ isActive }) =>
            [
              isActive ? activeLink : '',
              'p-2 sm:mx-2 w-full text-center sm:rounded-md flex justify-center hover:bg-gray-100 transform transition-all duration-200',
            ].join(' ')
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            [
              isActive ? activeLink : '',
              'p-2 sm:mx-2 w-full text-center sm:rounded-md flex justify-center hover:bg-gray-100 transform transition-all duration-200',
            ].join(' ')
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            [
              isActive ? activeLink : '',
              'p-2 sm:mx-2 w-full text-center sm:rounded-md flex justify-center hover:bg-gray-100 transform transition-all duration-200',
            ].join(' ')
          }
        >
          Contact
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
