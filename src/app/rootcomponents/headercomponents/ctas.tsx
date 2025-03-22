import { Button } from "@/components/ui/button";
import AuthButton from "../authbutton";

export default function HeaderCtas() {
  return (
    <div
    className="flex flex-grow flex-col lg:flex-row gap-[1rem]" 
    >
        <AuthButton />
        <Button className="text-[0.8rem] rounded-full duration-300 hover:cursor-pointer bg-lightmode-btn-bg-color dark:bg-darkmode-btn-bg-color hover:bg-lightmode-btn-bg-hover-color dark:hover:bg-darkmode-btn-bg-hover-color text-lightmode-btn-text-color dark:text-darkmode-btn-text-color">
            Make Your Own Trip
        </Button>
    </div>
  )
}
