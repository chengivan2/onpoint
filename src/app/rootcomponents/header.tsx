import HeaderCtas from "./headercomponents/ctas";
import Menu from "./headercomponents/menu";
import ThemeToggle from "./themetoggle";

export default function Header() {
  return (
    <header className="absolute flex flex-row w-full justify-between items-center bg-lightmode-header-bg-color dark:bg-darkmode-header-bg-color">
      <h1 className="flex-grow text-[#F8F8F8] dark:text-[#181818]">Logo</h1>
      <Menu />
      <ThemeToggle />
      <HeaderCtas />
    </header>
  );
}
