
export default function BookingSteps() {
  return (
    <section className="booking-steps-section">
  <div className="container mx-auto px-4 py-16 max-w-6xl">
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 dark:text-green-300">
        Easy and Fast
      </h2>
      <p className="text-lg text-green-600 dark:text-green-200 mb-8">
        Book your next trip in 3 easy steps
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     
        <div className="p-6 bg-white/50 dark:bg-green-900/20 rounded-xl backdrop-blur-md border border-green-100/30 dark:border-green-900/30 shadow-lg shadow-green-100/30 dark:shadow-green-900/10">
          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-100">Choose Destination</h3>
          <p className="text-green-600/80 dark:text-green-300/80">Select your perfect destination from our curated list of amazing locations</p>
        </div>

        <div className="p-6 bg-white/50 dark:bg-green-900/20 rounded-xl backdrop-blur-md border border-green-100/30 dark:border-green-900/30 shadow-lg shadow-green-100/30 dark:shadow-green-900/10">
          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-100">Make Payment</h3>
          <p className="text-green-600/80 dark:text-green-300/80">Secure and easy payment process with multiple options available</p>
        </div>

        <div className="p-6 bg-white/50 dark:bg-green-900/20 rounded-xl backdrop-blur-md border border-green-100/30 dark:border-green-900/30 shadow-lg shadow-green-100/30 dark:shadow-green-900/10">
          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-100">Reach Airport</h3>
          <p className="text-green-600/80 dark:text-green-300/80">Prepare for your adventure and arrive at the airport on your selected date</p>
        </div>
      </div>
    </div>


    <div className="relative bg-white dark:bg-green-900/30 rounded-2xl shadow-xl shadow-green-100/40 dark:shadow-green-900/20 p-8 max-w-xl mx-auto border border-green-100/30 dark:border-green-900/30 backdrop-blur-md">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-bold text-green-800 dark:text-green-100">Trip To Greece</h3>
          <p className="text-green-600 dark:text-green-300">14-29 June | by Robbin Jos</p>
        </div>
        <span className="bg-green-100/50 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">Ongoing</span>
      </div>

      <div className="mb-6">
        <div className="h-2 bg-green-100/30 dark:bg-green-900/50 rounded-full">
          <div className="w-2/5 h-2 bg-green-500 rounded-full"></div>
        </div>
        <p className="text-sm text-green-600 dark:text-green-300 mt-2">40% completed</p>
      </div>

      <div className="bg-green-100/50 dark:bg-green-900/50 h-48 rounded-xl mb-6"></div>

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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>
  )
}
