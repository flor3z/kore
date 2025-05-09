const HowItWorks = () => {
  return (
    <section className="py-12">
      {/* Container */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-16 md:px-10 md:py-20">
        {/* HEADING TEXT */}
        <p className="font-inter mb-2 text-center text-sm font-heading">
          3 EASY STEPS
        </p>
        <h1 className="text-center text-3xl font-bold md:text-4xl">
          How it works
        </h1>
        <p className="font-inter mx-auto mb-12 mt-4 max-w-lg px-5 text-center text-base font-light text-gray-500">
          Use premium tailwindcss components to ship your product faster to your
          customers. Build better and faster with Devjoy
        </p>
        {/* HOW IT WORKS STEPS */}
        <div className="flex flex-col items-start justify-center md:flex-row">
          {/* BLOCK */}
          <div className="relative my-8 flex w-full rounded-md md:mx-8 md:flex-col">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200 shadow-lg hover:bg-gray-300 transition transform duration-300 ease-out">
              <h2 className="text-3xl font-heading">1</h2>
            </div>
            <div className="ml-6 md:ml-0">
              <h2 className="mb-5 text-xl font-heading md:mt-8">Assessment</h2>
              <p className="font-inter max-w-md pr-5 text-base text-gray-500">
                Initial assesment provides for an overview of what services may
                be required for customers interested in our procedures.
              </p>
            </div>
            {/* MOBILE - HOW IT WORKS LINE */}
          </div>
          {/* BLOCK */}
          <div className="relative my-8 flex w-full rounded-md md:mx-8 md:flex-col">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200 shadow-lg hover:bg-gray-300 transition transform duration-300 ease-out">
              <h2 className="text-3xl font-heading">2</h2>
            </div>
            <div className="ml-6 md:ml-0">
              <h2 className="mb-5 text-xl font-heading md:mt-8">
                Consultation
              </h2>
              <p className="font-inter max-w-md pr-5 text-base text-gray-500">
                Here we advise of the ideal treaments and pricing to best match
                our customers needs, prior to any product administration.
              </p>
            </div>
            {/* MOBILE - HOW IT WORKS LINE */}
          </div>
          {/* BLOCK */}
          <div className="relative my-8 flex w-full rounded-md md:mx-8 md:flex-col">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200 shadow-lg hover:bg-gray-300 transition transform duration-300 ease-out">
              <h2 className="text-3xl font-heading item">3</h2>
            </div>
            <div className="ml-6 md:ml-0">
              <h2 className="mb-5 text-xl font-heading md:mt-8">Procedure</h2>
              <p className="font-inter max-w-md pr-5 text-base text-gray-500">
                Finally, we undergo the requested services using our industry
                leading medical grade equipment and products to provide an
                exceptional experience for our clientle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
