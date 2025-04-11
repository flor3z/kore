import testimg from '../../assets/TestIMG.jpg';
import HowItWorks from '../HowItWorks';

const Home = () => {
  return (
    <>
      <header>
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
          {/* Component */}
          <div className="flex mt-30 flex-col justify-center mx-auto w-full max-w-3xl py-12 md:py-16 lg:py-20 gap-10 fade-in-left-normal">
            {/* Title (min-h-screen this may need to replace mt-30 in class above) */}
            <div className="flex flex-col items-center gap-y-5">
              <h1 className="text-center text-4xl font-heading md:text-6xl">
                Beauty at it's KORE
              </h1>
              <p className="text-center text-gray-500 max-w-lg text-sm font-sm sm:text-base">
                Embodied with foundational knowledge, our expertise lies in
                precise analysis of the skin to bring you a long lasting,
                rejuvinating appearance.
              </p>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="bg-custom-image h-96 flex flex-col text-center items-center justify-center bg-cover bg-center opacity-95 bg-gray-800 bg-blend-overlay  bg-no-repeat">
          {/* <img
            className="justify-center h-80 w-full bg-cover"
            alt="img"
            src={testimg}
          /> */}
          <p className=" text-white font-heading font-light text-left text-md  md:text-3xl max-w-md border-white border-2 mt-5 p-5">
            Embodied with foundational knowledge, our expertise lies in precise
            analysis of the skin to bring you a long lasting, rejuvinating
            appearance.
          </p>
        </div>
      </section>
      <section>
        <HowItWorks />
      </section>
    </>
  );
};

export default Home;
