import NavLinks from './NavLinks';
import Logo from './Logo';

const NavBar = () => {
  return (
    <nav className="flex w-full flex-wrap  sticky top-0 z-10 mx-auto items-center justify-between  shadow-md p-6 bg-[rgba(165,159,159,0.2)] ">
      <Logo />
      <NavLinks />
    </nav>
  );
};

export default NavBar;
