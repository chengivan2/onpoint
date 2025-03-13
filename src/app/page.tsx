import Header from "./rootcomponents/header";

export default function Home() {
  return (
    <>
    <Header />
    <main className="relative min-w-[100%]">
      <h2
      className="text-lightmode-text-color dark:text-darkmode-text-color">Travely</h2>
    </main>
    </>
    
  );
}
