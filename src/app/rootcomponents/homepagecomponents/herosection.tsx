import AnimatedHeading from "@/app/rootcomponents/AnimatedHeading";

export default function HerosectionOne() {
  return (
    <section className="relative px-[0.1rem] lg:px-[1rem] mt-20 py-[0.8rem] lg:py-[2rem] min-w-full min-h-[100vh]">

      <div className="relative px-[0.1rem] py-[0.1rem] min-w-full h-[98vh] rounded-[0.8rem] bg-cover bg-center bg-[url(/images/herotestimage.jpg)]">

        <div className="absolute inset-0 bg-[#1A1A1A] opacity-50 rounded-[0.8rem]"></div>

        <div className="relative min-h-full min-w-full flex flex-col justify-center items-center">
            <AnimatedHeading
            words={['Toward', 'Explore', 'Discover']}
            restOfHeading="More Travel Time"
            subtitle="With OnPoint" />
        </div>

      </div>

    </section>
  );
}
