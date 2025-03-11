import React from 'react';
import testimg from '../../assets/TestIMG.jpg';

const Home = () => {
  return (
    <>
      <header>
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
          {/* Component */}
          <div className="flex mt-30 flex-col justify-center mx-auto w-full max-w-3xl py-12 md:py-16 lg:py-20 gap-10">
            {/* Title (min-h-screen this may need to replace mt-30 in class above) */}
            <div className="flex flex-col items-center gap-y-5">
              <h1 className="text-center text-4xl font-heading md:text-6xl">
                Beauty at it's KORE
              </h1>
              <p className="text-center text-gray-500 max-w-lg text-sm sm:text-base">
                Embodied with foundational knowledge, our expertise lies in
                precise analysis of the skin to bring you a long lasting,
                rejuvinating appearance.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div>
        <div className="flex justify-center mx-auto">
          <img
            className="relative max-h-md justify-center"
            alt="img"
            src={testimg}
          />
          <p className="absolute text-white text-4xl text-center w-1/3 mt-80">
            Embodied with foundational knowledge, our expertise lies in precise
            analysis of the skin to bring you a long lasting, rejuvinating
            appearance.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
