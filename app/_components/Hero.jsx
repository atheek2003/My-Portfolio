// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

// export default function Hero() {
//     return (
//         <section className='relative grid place-content-center py-20 px-6'>
//             <div className='md:max-w-2xl max-w-md text-center grid gap-1'>
//             <h1 className='md:text-4xl lg:text-5xl text-3xl font-bold'>
//   Hi I am{' '}
//   <span className='underline underline-offset-4 text-primary glow'>
//     Atheek Hebbar
//   </span>{' '}
//   <br />
//   <span className='text-primary fade-in-out'>.</span>{' '}
//   <span className='fade-in-out2'>
//     Web Development and Machine Learning Enthusiast
//   </span>
// </h1>
//                 <p className='text-[1.0rem] max-w-md mx-auto'>
//   I am a B.tech Student at PES University  <span className='text-primary'>.</span>
// </p>
//             </div>
//             <div className='flex items-center justify-center gap-3 mt-5'>
//                 <Button asChild variant="outline">
//                     <Link href="/">Explore</Link>
//                 </Button>
//                 <Button asChild className="flex gap-1 items-center justify-center">
//                     <Link href="https://github.com/atheek2003">My Github</Link>
//                 </Button>
//             </div>
//         </section>
//     )
// }


import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className='relative grid place-content-center py-20 px-6'>
        <div className='md:max-w-2xl max-w-md text-center grid gap-4'>
            <h1 className='md:text-4xl lg:text-5xl text-3xl font-bold animate-fade-in'>
                Hi I am{' '}
                <span className='underline underline-offset-4 text-primary animate'>
                    Atheek Hebbar
                </span>{' '}
                <br />
                <span className='text-primary animate-fade-in-out'></span>{' '}
                <span className='animate-fade-in-out-delayed'>
                    Web Development and Machine Learning Enthusiast
                </span>
            </h1>
            <p className='text-[1.0rem] max-w-md mx-auto animate-fade-in-delayed'>
                I am a B.tech Student at PES University{' '}
                <span className='text-primary'>.</span>
            </p>
        </div>
        <div className='flex items-center justify-center gap-3 mt-5 animate-fade-in-delayed'>
            <Button asChild variant="outline">
                <Link href="app\not-found.jsx">Resume</Link>
            </Button>
            <Button asChild className="flex gap-1 items-center justify-center">
                <Link href="https://github.com/atheek2003">My Github</Link>
            </Button>
        </div>
    </section>
    )
}
