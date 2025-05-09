const Testimonials = () => {
  const testimonials = [
    {
      content:
        'Working with this team has transformed our business operations. Their expertise and dedication are unmatched.',
      name: 'Sarah Johnson',
      title: 'CEO, TechStart Inc.',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    {
      content:
        'The level of service and attention to detail exceeded our expectations. Highly recommended!',
      name: 'Michael Chen',
      title: 'Operations Director, Global Solutions',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    {
      content:
        'The level of service and attention to detail exceeded our expectations. Highly recommended!',
      name: 'Michael Chen',
      title: 'Operations Director, Global Solutions',
      avatar: '/placeholder.svg?height=40&width=40',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-heading sm:text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed">
              We take great care of our clients - See what they have to say
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 mx-auto max-w-5xl py-12">
        {testimonials.map((review, index) => (
          <div
            key={index}
            className="rounded-lg border-gray-200 p-6 shadow-md bg-slate-50"
          >
            <div className="flex items-start gap-4">
              <div className="relative h-10 w-10 flex-none">
                <div className="rounded-full bg-green-600 h-5 w-5 "></div>
              </div>
              <div className="flex-1">
                <p className="text-sm leading-loose text-slate-500">
                  "{review.content}"
                </p>
                <p className="mt-2 font-semibold">{review.name}</p>
                <p className="text-sm text-slate-500">{review.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
