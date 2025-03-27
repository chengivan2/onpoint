export default function OurServicesSection() {
  const services = [
    {
      icon: "⛅",
      title: "Hire a vehicle",
      description:
        "Book a land cruiser for tough terrains or a safari van to cruise in a game drive.",
    },
    {
      icon: "✈️",
      title: "The Best Weddings",
      description:
        "Need a venue for your wedding? Don't worry we've got your back.",
    },
    {
      icon: "📅",
      title: "Accommodation",
      description:
        "Choose among the best suites. We have both budgeted and luxury options.",
    },
    {
      icon: "⚙️",
      title: "Make Your Own Trip",
      description:
        "Make your own adventure by telling us your exact preferences. We'll make it happen",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            We Offer Best Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-lightmode-header-bg-color dark:bg-darkmode-header-bg-color rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 text-green-500">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
