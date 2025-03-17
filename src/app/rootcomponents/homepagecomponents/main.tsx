import Header from "../header";
import HeroSection from "./hero";
import HerosectionOne from "./herosection";

export default function Main() {
  return (
    <main className="relative min-w-[100%] min-h-[100vh] px-[1rem]">
      <Header />
      <HerosectionOne />
  </main>
  )
}
