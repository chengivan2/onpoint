import { Button } from "@/components/ui/button";

export default function HeaderCtas() {
  return (
    <div
    className="flex-grow" 
    >
        <Button className="text-[0.8rem] hover:cursor-pointer bg-lightmode-btn-bg-color dark:bg-darkmode-btn-bg-color text-lightmode-btn-text-color dark:text-darkmode-btn-text-color">
            Make Your Own Trip
        </Button>
    </div>
  )
}
