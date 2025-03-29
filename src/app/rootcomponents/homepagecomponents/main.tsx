import Header from "../header";
import BookingSteps from "./bookingsteps";
import HerosectionOne from "./herosection";
import HomeStatsSection from "./homestats";
import HomeTopDestinations from "./hometopdestinations";
import HomeTopTrips from "./hometoptrips";
import OurServicesSection from "./ourservices";

export default function Main() {
  return (
    <main className="relative min-w-[100%] min-h-[100vh]">
      <Header />
      <HerosectionOne />
      <OurServicesSection />
      <HomeTopDestinations />
      <BookingSteps />
      <HomeTopTrips />
      <HomeStatsSection />
  </main>
  )
}
