import { NavLink } from 'react-router';

const Links = () => {
  const standardStyling =
    'font-heading w-full flex justify-center italic text-xl';

  return (
    <>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? `${standardStyling} text-blue-500` : standardStyling
        }
      >
        <div className="relative py-2">
          <div className="inline-block relative no-underline after-line">
            About
          </div>
        </div>
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive ? `${standardStyling} text-blue-500` : standardStyling
        }
      >
        <div className="relative py-2">
          <div className="inline-block relative no-underline after-line">
            Services
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? `${standardStyling} text-blue-500` : standardStyling
        }
      >
        <div className="relative py-2">
          <div className="inline-block relative no-underline after-line">
            Contact
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/testimonials"
        className={({ isActive }) =>
          isActive ? `${standardStyling} text-blue-500` : standardStyling
        }
      >
        <div className="relative py-2">
          <div className="inline-block relative no-underline after-line">
            Testimonials
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Links;
