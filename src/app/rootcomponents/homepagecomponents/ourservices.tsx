export default function ServicesSection() {
    const services = [
      {
        icon: '⛅',
        title: 'Calculated Weather',
        description: 'Built Wicket longer admire do barton vanity itself do in it.'
      },
      {
        icon: '✈️',
        title: 'Best Flights',
        description: 'Engrossed listening. Park gate sell they west hard for the.'
      },
      {
        icon: '📅',
        title: 'Local Events',
        description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.'
      },
      {
        icon: '⚙️',
        title: 'Customization',
        description: 'We deliver outsourced aviation services for military customers'
      }
    ];
  
    return (
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900">
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
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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