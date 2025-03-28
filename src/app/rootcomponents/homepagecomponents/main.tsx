import Header from "../header";
import BookingSteps from "./bookingsteps";
import HerosectionOne from "./herosection";
import HomeTopDestinations from "./hometopdestinations";
import HomeTripCards from "./hometrips";
import OurServicesSection from "./ourservices";

export default function Main() {
  return (
    <main className="relative min-w-[100%] min-h-[100vh]">
      <Header />
      <HerosectionOne />
      <OurServicesSection />
      <HomeTopDestinations />
      <BookingSteps />
      <HomeTripCards />
  </main>
  )
}
