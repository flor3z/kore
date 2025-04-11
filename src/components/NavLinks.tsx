import { useState } from 'react';
import useOutsideClick from '../hooks/useOutsideClick';
import Links from './Links';
import { CiMenuBurger } from 'react-icons/ci';

const NavLinks = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const refEl = useOutsideClick(() => {
    setIsNavOpen(false);
  });

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="w-1/3 flex justify-end">
        <div className="w-10 h-10 md:hidden">
          <button onClick={toggleNav} className="cursor-pointer text-3xl">
            {isNavOpen ? (
              <span className="w-10 h-10">X</span>
            ) : (
              <CiMenuBurger />
            )}
          </button>
        </div>
        <div className="w-full hidden md:flex justify-between">
          <Links />
        </div>
      </nav>
      {isNavOpen ? (
        <div
          ref={refEl}
          className="flex flex-col items-center justify-center basis-full md:hidden transition transform duration-100 ease-in-out"
        >
          <Links />
        </div>
      ) : null}
    </>
  );
};

export default NavLinks;
