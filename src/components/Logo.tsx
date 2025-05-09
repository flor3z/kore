import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to="/">
      <div className="text-center">
        <span className="text-3xl font-heading -ml-1">KORE</span>
        <br />
        <span className="text-md tracking-widest font-heading ">
          Aesthetics
        </span>
      </div>
    </Link>
  );
};

export default Logo;
