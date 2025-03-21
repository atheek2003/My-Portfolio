// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function Page() {
//     return(
//         <div className="h-[500px] grid place-content-center">
//             <div>
//                 <h1 className="text-3xl font-bold">4<span className="text-primary">0</span>4 Not Found<span className="text-primary">.</span></h1>
//                 <p className="text-3xl font-bold">Please Wait ,Still working on it <span className="text-primary">.</span></p>
//                 <Button className="mt-4" asChild><Link href="/">Go Home</Link></Button>
//             </div>
//         </div>
//     )
// }





import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResumePage() {
    return (
        <div className="p-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">My Resume</h1>

            {/* Embedded PDF Viewer */}
            <iframe 
                src="/resume.pdf" 
                className="w-full max-w-4xl h-[800px] border rounded-lg shadow-lg" 
                title="Resume PDF"
            />

            {/* Buttons */}
            <div className="mt-6 space-x-4">
                <Button asChild>
                    <Link href="/">Go Home</Link>
                </Button>
                <Button variant="outline" asChild>
                    <a href="public\resume.pdf" download>
                        Download Resume
                    </a>
                </Button>
            </div>
        </div>
    );
}
