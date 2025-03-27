import Header from "../header";
import HerosectionOne from "./herosection";
import HomeTopDestinations from "./hometopdestinations";
import OurServicesSection from "./ourservices";

export default function Main() {
  return (
    <main className="relative min-w-[100%] min-h-[100vh]">
      <Header />
      <HerosectionOne />
      <OurServicesSection />
      <HomeTopDestinations />
  </main>
  )
}
