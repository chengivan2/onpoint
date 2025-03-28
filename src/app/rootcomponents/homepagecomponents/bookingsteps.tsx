export default function BookingSection() {
  const steps = [
    {
      icon: (
        <svg 
  className="w-6 h-6 text-green-600 dark:text-green-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth="2" 
    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
  />
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth="2" 
    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
  />
</svg>
      ),
      title: "1. Choose Destination",
      description:
        "Select your perfect destination from our curated list of amazing locations",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-green-600 dark:text-green-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "2. Make Payment",
      description:
        "Secure and easy payment process with multiple options available",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-green-600 dark:text-green-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "3. Reach Airport",
      description:
        "Prepare for your adventure and arrive at the airport on your selected date",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        {/* Steps Column */}
        <div className="flex-1 space-y-8">
          <div className="text-center md:text-left animate-fade-in-down">
            <h2 className="text-4xl font-bold text-green-800 dark:text-green-200 mb-4">
              Easy and Fast
            </h2>
            <p className="text-lg text-green-600 dark:text-green-300">
              Book your next trip in 3 easy steps
            </p>
          </div>

          <div className="relative space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`animate-fade-in-up delay-${
                  index * 100
                } relative z-10 p-6 rounded-xl transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 dark:text-green-100 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-green-600/80 dark:text-green-300/80">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Card */}
        <div className="flex-1 w-full max-w-xl motion-preset-slide-left motion-duration-2000 delay-300">
          <div className="relative rounded-2xl shadow-xl border-green-100/30 dark:border-green-900/30 hover:shadow-xl p-8 border">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-green-800 dark:text-green-100">
                    Trip To Greece
                  </h3>
                  <p className="text-green-600 dark:text-green-300">
                    14-29 June | by Robbin Jos
                  </p>
                </div>
                <span className="bg-green-100/50 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                  Ongoing
                </span>
              </div>

              <div className="bg-[url(https://res.cloudinary.com/doqbnfais/image/upload/v1743186817/onPoint%20website%20concept/website%20assets/website%20images/website%20design%20and%20stock%20photos/friends-eiffel-tower_evy9gv.jpg)] bg-cover bg-right-top lg:bg-center h-48 rounded-xl">
                
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-white dark:border-green-900"></div>
                    <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-white dark:border-green-900"></div>
                    <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-white dark:border-green-900"></div>
                  </div>
                  <span className="text-green-600 dark:text-green-300 text-sm">
                    24 people going
                  </span>
                </div>

                <button className="flex items-center text-green-600 dark:text-green-300 hover:text-green-700 dark:hover:text-green-200 transition-colors">
                  <span className="mr-2">View Details</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
