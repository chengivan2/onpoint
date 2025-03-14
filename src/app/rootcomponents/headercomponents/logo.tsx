import Image from "next/image";

export default function HeaderLogo() {
  return (
    <div className="flex justify-between items-center">
        <Image
        width={200}
        height={100}
        alt="OnPoint header logo"
        src="/logos/onpointhflightmodelogo.png"
        className="flex dark:hidden" />

    <Image
        width={200}
        height={100}
        alt="OnPoint header logo"
        src="/logos/onpointhfdarkmodelogo.png"
        className="hidden dark:flex" />
    </div>
  )
}
