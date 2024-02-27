import Link from 'next/link'
import React from 'react'
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from './ui/moving-border';
function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center relative overflow-hidden mx-auto py-10 md:py-0 items-center'>
       <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      <div className='p-4 relative z-10 w-full text-center'>
 
        <h1 className='text-5xl md:text-7xl mt-20 md:mt-0 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-extrabold'>Master The Art of Coding</h1>
        <p className=' mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Dive Into Our comprehensive Coding Courses and transform Your Coding Knowledge your Coding Journey. Whether you're beginner or looking to refine Your skills ,Join us to unlock true potential</p>

        <div className='mt-4'>
          <Link href={"/Courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white hover:bg-blue-500 border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default HeroSection