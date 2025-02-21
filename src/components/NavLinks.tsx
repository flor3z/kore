import { useState, useEffect, useRef } from 'react';
import Links from './Links';
import { CiMenuBurger } from 'react-icons/ci';

const NavLinks = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const refEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const closeOnOutsideClick = (event: any) => {
      if (!refEl.current) {
        return;
      }
      if (!refEl.current?.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('click', closeOnOutsideClick, true);

    return () => document.removeEventListener('click', closeOnOutsideClick);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="w-1/3 flex justify-end">
        <div className="w-10 h-10 text-2xl md:hidden">
          <button onClick={toggleNav} className="cursor-pointer text-3xl">
            {isNavOpen ? <span>X</span> : <CiMenuBurger />}
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
