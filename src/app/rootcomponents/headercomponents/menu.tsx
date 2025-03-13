import Link from "next/link";

export default function Menu() {
  return (
    <div 
    className="flex-grow px-[1rem]" 
    >
        <ul 
        className="flex flex-col gap-2 lg:flex-row lg:justify-between">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Blog</Link></li>
            <li><Link href="/">Contact</Link></li>
            <li><Link href="/">About</Link></li>
        </ul>
    </div>
  )
}
