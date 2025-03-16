import { Button } from "@/components/ui/button";

export default function HeaderCtas() {
  return (
    <div
    className="flex-grow" 
    >
        <Button className="text-[0.8rem] bg-lightmode-btn-bg-color dark:bg-darkmode-btn-bg-color">
            Make Your Own Trip
        </Button>
    </div>
  )
}
