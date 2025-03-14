import HeaderCtas from "./headercomponents/ctas";
import HeaderLogo from "./headercomponents/logo";
import Menu from "./headercomponents/menu";
import ThemeToggle from "./themetoggle";

export default function Header() {
  return (
    <header className="relative px-[1rem] flex flex-row w-full justify-between items-center bg-lightmode-header-bg-color dark:bg-darkmode-header-bg-color">
      <HeaderLogo />
      <Menu />
      <div
      className="flex flex-row flex-end gap-4">
      <ThemeToggle />
      <HeaderCtas />
      </div>
    </header>
  );
}
