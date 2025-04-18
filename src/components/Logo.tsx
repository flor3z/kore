import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to="/">
      <span className="text-3xl font-heading ml-2">KORE</span>
      <br />
      <span className="text-md tracking-widest font-heading ml-2">
        Aesthetics
      </span>
    </Link>
  );
};

export default Logo;
