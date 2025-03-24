import Header from "../header";
import HerosectionOne from "./herosection";
import HomeTopDestinations from "./hometopdestinations";

export default function Main() {
  return (
    <main className="relative min-w-[100%] min-h-[100vh]">
      <Header />
      <HerosectionOne />
      <HomeTopDestinations />
  </main>
  )
}
