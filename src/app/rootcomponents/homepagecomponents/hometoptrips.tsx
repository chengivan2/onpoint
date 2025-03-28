import HomeDestinationCard from "./destinationcard";
import HomeTripCards from "./hometrips";

export default function HomeTopTrips() {
  return (
    <section className="relative flex flex-col min-w-full">
      <div className="flex relative min-w-full justify-center">
        <h2 className="text-4xl font-black text-lightmode-heading-color dark:text-darkmode-heading-color">Top Trips</h2>
      </div>

      <HomeTripCards />

    </section>
  );
}
