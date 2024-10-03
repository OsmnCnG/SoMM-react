import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="bg-black text-white w-full fixed top-0 left-0 right-0 flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 2xl:h-14">
            <Link to={"/Home"}>
                <div className="flex-shrink-0">
                    <div className="text-sm sm:text-sm md:text-sm lg:text-xl xl:text-xl 2xl:text-2xl font-bold pl-3 sm:pl-4 md:pl-5 lg:pl-6 xl:pl-7 2xl:pl-8">
                        SOMMA
                    </div>
                </div>
            </Link>

            <div className="flex-shrink-0 space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6 2xl:space-x-7 pr-3 sm:pr-4 md:pr-5 lg:pr-6 xl:pr-7 2xl:pr-8">
                <Link to={"/Login"}>
                    <Button variant="ghost" className="text-white hover:text-white hover:bg-zinc-800 text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
                        Log in
                    </Button>
                </Link>
                <Button variant="outline" className="bg-zinc-800 text-white border-zinc-800 hover:bg-zinc-700 text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
                    Sign up
                </Button>
            </div>
        </nav>
    )
}