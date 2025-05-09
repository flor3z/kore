import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 75) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fade-in">
      {backToTopButton && (
        <button
          onClick={scrollUp}
          className=" bg-purple-200 shadow-4xl z-10 hover:bg-purple-300 hover:text-white w-10 bottom-10 right-5 h-10 rounded-full text-2xl fixed transition transform duration-300 ease-in-out"
        >
          ^
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
