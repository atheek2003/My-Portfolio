import Link from "next/link";
import Logo from "./Logo";
import Social from "./Social";
import { ModeToggle } from "./ModeToggle";

export default function Footer() {
    return (
        <footer className="grid gap-3 md:px-20 lg:px-32 px-8 py-10">
            <div className="flex justify-between">
                <div>
                    <Logo />
                    <p className="text-sm">Built by me, avilable on <a href="https://github.com/atheek2003" className="hover:underline hover:text-primary">GitHub</a><span className="text-primary">.</span></p>
                </div>
                <ModeToggle/>
            </div>
            <Social />
            <ul className="text-sm grid gap-1">
                <li className="hover:underline hover:text-primary"><Link href="https://github.com">Fix this web</Link></li>
                <li className="hover:underline hover:text-primary"><Link href="https://github.com">Report Issue</Link></li>
            </ul>
            <p className="text-xs"> ©{new Date().getFullYear()} <a href="https://github.com/atheek2003" className="hover:underline hover:text-primary">atheek2003</a> All Rights Reserved.</p>
        </footer>
    )
}