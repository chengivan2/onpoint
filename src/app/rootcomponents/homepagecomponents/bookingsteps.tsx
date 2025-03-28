export default function BookingSection() {
    return (
      <section className="min-h-screen bg-green-50/20 dark:bg-green-900/10 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Steps Column */}
          <div className="flex-1 space-y-8">
            <div className="space-y-2 animate-fade-in-left">
              <h2 className="text-4xl font-bold text-green-800 dark:text-green-200 mb-4">
                Easy and Fast
              </h2>
              <p className="text-lg text-green-600 dark:text-green-300 mb-8">
                Book your next trip in 3 easy steps
              </p>
            </div>
  
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="p-6 bg-white/50 dark:bg-green-900/20 rounded-xl backdrop-blur-md border border-green-100/30 dark:border-green-900/30 shadow-lg shadow-green-100/30 dark:shadow-green-900/10 motion-preset-slide-down motion-duration-600">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-100">Choose Destination</h3>
                    <p className="text-green-600/80 dark:text-green-300/80">Select your perfect destination from our curated list of amazing locations</p>
                  </div>
                </div>
              </div>
  
              {/* Step 2 */}
              <div className="p-6 bg-white/50 dark:bg-green-900/20 rounded-xl backdrop-blur-md border border-green-100/30 dark:border-green-900/30 shadow-lg shadow-green-100/30 dark:shadow-green-900/10 motion-preset-slide-down motion-duration-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-100">Make Payment</h3>
                    <p className="text-green-600/80 dark:text-green-300/80">Secure and easy payment process with multiple options available</p>
                  </div>
                </div>
              </div>
  
              {/* Step 3 */}
              <div className="p-6 bg-white/50 dark:bg-green-900/20 rounded-xl backdrop-blur-md border border-green-100/30 dark:border-green-900/30 shadow-lg shadow-green-100/30 dark:shadow-green-900/10 motion-preset-slide-down motion-duration-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-100">Reach Airport</h3>
                    <p className="text-green-600/80 dark:text-green-300/80">Prepare for your adventure and arrive at the airport on your selected date</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Image Card */}
          <div className="flex-1 w-full max-w-xl motion-preset-slide-left motion-duration-900">
            <div className="relative bg-white dark:bg-green-900/30 rounded-2xl shadow-xl shadow-green-100/40 dark:shadow-green-900/20 p-8 border border-green-100/30 dark:border-green-900/30 backdrop-blur-md">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-green-800 dark:text-green-100">Trip To Greece</h3>
                    <p className="text-green-600 dark:text-green-300">14-29 June | by Robbin Jos</p>
                  </div>
                  <span className="bg-green-100/50 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">Ongoing</span>
                </div>
  
                <div className="bg-green-100/50 dark:bg-green-900/50 h-48 rounded-xl">
                  {/* Image placeholder */}
                </div>
  
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-white dark:border-green-900"></div>
                      <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-white dark:border-green-900"></div>
                      <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-white dark:border-green-900"></div>
                    </div>
                    <span className="text-green-600 dark:text-green-300 text-sm">24 people going</span>
                  </div>
                  
                  <button className="flex items-center text-green-600 dark:text-green-300 hover:text-green-700 dark:hover:text-green-200 transition-colors">
                    <span className="mr-2">View Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
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