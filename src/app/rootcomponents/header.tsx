import HeaderCtas from "./headercomponents/ctas";
import Menu from "./headercomponents/menu";
import ThemeToggle from "./themetoggle";

export default function Header() {
  return (
    <header className="absolute px-[1rem] flex flex-row w-full justify-between items-center bg-lightmode-header-bg-color dark:bg-darkmode-header-bg-color">
      <h1 className="flex-grow text-lightmode-text-color dark:text-darkmode-text-color">Logo</h1>
      <Menu />
      <div
      className="flex flex-row flex-end gap-4">
      <ThemeToggle />
      <HeaderCtas />
      </div>
    </header>
  );
}
