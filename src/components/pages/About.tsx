import Image from '../../assets/TestIMG.jpg';

const About = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="flex flex-col sm:flex-row justify-evenly items-center text-center flex-wrap">
        <div className="flex flex-col">
          <div className="w-lg px-6">
            <h1 className="font-heading text-5xl text-left py-2">
              Meet The Owner
            </h1>
            <h2 className="text-left font-semibold py-2 text-2xl text-neutral-500">
              Registered Nurse Injector
            </h2>
            <p className="text-left font-heading text-neutral-500 font-medium ">
              With a background in Obstetrics and Women's Health, Nurse Kristin
              prioritizes client education and safety within her practice.
            </p>
            <br />
            <p className="text-left text-neutral-500 font-medium font-heading">
              Kristin received her certification in advanced Botox and Filler
              techniques through the Canadian Association of Medical Aesthetics.
            </p>
            <br />
            <p className="text-left text-neutral-500 font-medium font-heading">
              Specialized in services including Botox, Dermal Fillers,
              Microneedling, Lipolysis, Vitamin Injections & more !
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-8 min-w-lg">
          <div className="rounded-full ring-6 border-6 overflow-hidden aspect-square ring-white shadow-xl mb-10">
            <img
              src={Image}
              alt="Profile Picture"
              className="object-cover h-80 w-80 rounded-full"
            />
          </div>
          <h2 className="font-heading text-lg">
            Kristin | KORE Aesthetics Owner
          </h2>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row-reverse justify-evenly items-center text-center flex-wrap text-white bg-neutral-600 py-10">
        <div className="flex flex-col">
          <div className="w-lg px-6">
            <h1 className="font-heading text-5xl text-left py-3">
              Trust In Us
            </h1>

            <p className="text-left font-heading text-neutral-300 font-medium ">
              As a Registered Nurse, caring for our clients comes easy.
              Naturally, we ensure to take note of all details requested by our
              clients, to provide a high-level result for each procedure
            </p>
            <br />
            <p className="text-left text-neutral-300 font-medium font-heading">
              Passionate about the latest advancements in anti-aging treatments,
              Nurse Kristin is commited to providing top-tier aesthetic
              treatments.
            </p>
            <br />
            <p className="text-left text-neutral-300 font-medium font-heading">
              Delivering personalized, natural results that enhance each
              client's unique features.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-8 min-w-lg">
          <div className="rounded-full ring-6 border-6 overflow-hidden aspect-square ring-white shadow-xl mb-10">
            <img
              src={Image}
              alt="Profile Picture"
              className="object-cover h-80 w-80 rounded-full"
            />
          </div>
          <h2 className="font-heading text-lg">
            Kristin | KORE Aesthetics Owner
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
