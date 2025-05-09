import { SlScreenSmartphone } from 'react-icons/sl';
import { MdLocationPin } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

const Contact = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-heading text-5xl md:text-6xl">Let's Chat</h1>
        <div className="w-60 h-1 my-3 bg-purple-300"></div>

        <p className="font-heading text-neutral-600 max-w-xl text-center">
          Feel free to contact us about any questions or concerns you may have.
          <br />
          We're here to help.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly py-32 gap-2 flex-wrap">
        <div className="flex flex-col items-center justify-center py-6 min-w-sm">
          <span className="text-5xl pb-2 text-purple-400">
            <MdLocationPin />
          </span>
          <h3 className="font-heading text-xl text-neutral-600">ADDRESS</h3>
          <br />
          <p className="font-heading font-bold tracking-widest">Milton, ON</p>
        </div>
        <div className="flex flex-col items-center justify-center py-6 min-w-sm">
          <span className="text-5xl pb-2 text-purple-400">
            <SlScreenSmartphone />
          </span>
          <h3 className="font-heading text-xl text-neutral-600">PHONE</h3>
          <br />
          <p className="font-heading font-bold tracking-widest">905 *** 1687</p>
        </div>
        <div className="flex flex-col items-center justify-center py-6 min-w-sm">
          <span className="text-5xl pb-2 text-purple-400">
            <TfiEmail />
          </span>
          <h3 className="font-heading text-xl text-neutral-600">EMAIL</h3>
          <br />
          <p className="font-heading font-bold tracking-widest">
            koreaesthetics.**@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
