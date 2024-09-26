import Image from 'next/image'
import React from 'react'
import hero from '@/public/AI Job Search Platform _ Prentus/prentus hero.png'
import herosmall from '@/public/AI Job Search Platform _ Prentus/47hXKbKTICJa3YCDWpgtYplYM.png'
import list from '@/public/AI Job Search Platform _ Prentus/list identifier.svg'
import ourstory from '@/public/AI Job Search Platform _ Prentus/svgexport-4.svg'
import our from '@/public/AI Job Search Platform _ Prentus/rEtaPgWl7DNmyBS4cXXPOJXXoF8.png'
import problem from '@/public/AI Job Search Platform _ Prentus/svgexport-5.svg'
import prob from '@/public/AI Job Search Platform _ Prentus/z2g4Amh3cum6hnCZx77O6CULNE.png'
import orangestar from '@/public/AI Job Search Platform _ Prentus/svgexport-6.svg'
import solution from '@/public/AI Job Search Platform _ Prentus/svgexport-7.svg'
import bgstars from '@/public/AI Job Search Platform _ Prentus/bg-stars.svg'
import headstar from '@/public/AI Job Search Platform _ Prentus/heading star.svg'
import cardheader from '@/public/AI Job Search Platform _ Prentus/card heder.svg'

const page = () => {
    return (
        <div className='min-h-screen w-auto bmLLL:w-[1200px] mx-auto flex flex-col items-center justify-start h-min p-0 relative'>
            <div className='bmLLL:pt-[116px] mx-auto bmLLL:px-[64px] bmLLL:pb-[64px] flex items-center flex-none h-min justify-center relative w-full '>
                <div className='flex flex-col bg-[#cfff92] rounded-[24px] flex-grow-[1] flex-shrink-0 basis-0 gap-0 h-min justify-center items-center max-w-[1640px] p-0 relative w-full'>
                    <div className='bmLLL:p-[64px] p-[72px] bmLLL:w-full w-[75%] flex flex-col flex-none items-center justify-start gap-3 h-min relative'>
                        <div className='flex justify-start flex-col flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full'>
                            <p className='font-normal text-[#015840] text-[20px] tracking-tight leading-[2rem] text-center  m-0 p-0'>About Prentus</p>
                        </div>
                        <div className='flex-none h-auto relative whitespace-pre-wrap w-full'>
                            <h2 className='font-normal text-[#015840] text-[36px] tracking-tight leading-[1.8rem]  text-center '>
                                Our mission is to make the job placement process fast, fun, and fair — so anyone can find their dream job.
                            </h2>
                        </div>
                    </div>

                    <div className='bmLLL:h-auto aspect-[6.41146456/1] flex-none relative w-full  '>
                        <div className='absolute hidden amLL:block  w-full h-full'>
                            <Image src={hero} alt='' fill={true} />
                        </div>
                        <div className='absolute  amLL:hidden  w-full h-full'>
                            <Image src={herosmall} alt='' fill={true} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bmLLL:px-[64px] bmLLL:pb-[64px] bmLLL:pt-0 '>
                <div className='flex flex-grow-[1] flex-shrink-0 basis-0 max-w-[1640px] relative'>
                    <div className='flex  items-start justify-center bmLLL:gap-[80px] gap-[148px] relative w-full flex-none '>
                        <div className='contents'>
                            <div className='flex-none h-auto sticky top-[132px] w-auto z-[1]'>
                                <div className='rounded-[24px] border-solid border-[4px] border-[#311f40] bg-[#fdf3ea] flex flex-col items-start justify-start min-h gap-9  p-6 relative w-[310px]'>
                                    <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full '>
                                        <p className='font-normal text-[#015840] text-[1.3rem] tracking-tight leading-[2rem]  text-start m-z-0 p-0 '>Our story</p>
                                    </div>
                                    <div className='flex flex-col items-center flex-none gap-6 h-min justify-center relative w-full p-0'>
                                        <a href="" className='cursor-pointer flex items-start justify-start flex-none gap-3 h-min p-0 w-full'>
                                            <div className='[image-rendering:pixelated] flex-shrink-0 fill-black text-black flex-none h-6 w-6 relative'>
                                                <div className='w-full h-full aspect-[1]'>
                                                    <Image src={list} alt='' fill={true} />
                                                </div>
                                            </div>

                                            <div className='flex flex-col justify-start flex-shrink-0 flex-grow-[1] basis-0 h-auto relative whitespace-pre-wrap '>
                                                <p className='font-normal text-[#015840] text-[16px] leading-[1.5] text-start '>Founder</p>
                                            </div>
                                        </a>
                                        <a href="" className='cursor-pointer flex items-start justify-start flex-none gap-3 h-min p-0 w-full'>
                                            <div className='[image-rendering:pixelated] flex-shrink-0 fill-black text-black flex-none h-6 w-6 relative'>
                                                <div className='w-full h-full aspect-[1]'>
                                                    <Image src={list} alt='' fill={true} />
                                                </div>
                                            </div>

                                            <div className='flex flex-col justify-start flex-shrink-0 flex-grow-[1] basis-0 h-auto relative whitespace-pre-wrap '>
                                                <p className='font-normal text-[#015840] text-[16px] leading-[1.5] text-start '>Problem</p>
                                            </div>
                                        </a>
                                        <a href="" className='cursor-pointer flex items-start justify-start flex-none gap-3 h-min p-0 w-full'>
                                            <div className='[image-rendering:pixelated] flex-shrink-0 fill-black text-black flex-none h-6 w-6 relative'>
                                                <div className='w-full h-full aspect-[1]'>
                                                    <Image src={list} alt='' fill={true} />
                                                </div>
                                            </div>

                                            <div className='flex flex-col justify-start flex-shrink-0 flex-grow-[1] basis-0 h-auto relative whitespace-pre-wrap '>
                                                <p className='font-normal text-[#015840] text-[16px] leading-[1.5] text-start '>Solution</p>
                                            </div>
                                        </a>
                                        <a href="" className='cursor-pointer flex items-start justify-start flex-none gap-3 h-min p-0 w-full'>
                                            <div className='[image-rendering:pixelated] flex-shrink-0 fill-black text-black flex-none h-6 w-6 relative'>
                                                <div className='w-full h-full aspect-[1]'>
                                                    <Image src={list} alt='' fill={true} />
                                                </div>
                                            </div>

                                            <div className='flex flex-col justify-start flex-shrink-0 flex-grow-[1] basis-0 h-auto relative whitespace-pre-wrap '>
                                                <p className='font-normal text-[#015840] text-[16px] leading-[1.5] text-start '>Milestones</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bmLLL:gap-[80px] gap-[148px] flex flex-col flex-grow-[1] flex-shrink-0 basis-0 items-center justify-center h-min p-0 relative'>
                            <div className='flex flex-col items-start justify-center flex-none gap-8 h-min relative w-full'>
                                <div className='flex flex-col gap-4 items-start justify-start h-min relative w-full flex-none '>
                                    <div className='flex gap-2 flex-none rounded-[100px] items-center justify-center bg-[#cfff92] h-min py-[4px] px-4 relative w-min '>
                                        <div className='flex justify-center items-center flex-none gap-0 h-min relative w-min p-0 '>
                                            <div className='[image-rendering:pixelated] relative flex-shrink-0 fill-black text-black'>
                                                <Image src={ourstory} alt='' fill={true} />
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre w-auto'>
                                            <p className='font-normal text-[#015840] text-[1rem] leading-[1.5rem] text-start'>Our story</p>
                                        </div>
                                    </div>

                                    <div className='border-l-4 border-[#987de1] flex flex-none h-min pl-6 w-full relative'>
                                        <div className='flex flex-col justify-start flex-shrink-0 flex-grow-[1] basis-0 h-auto relative'>
                                            <h3 className='font-normal text-[#015840] text-[2rem] tracking-tight leading-[1.2em] text-start '>My first job search sucked. </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-none items-center gap-8 h-[200px] justify-center relative w-full '>
                                    <div className='border-4 rounded-full border-[#311f40] flex-none h-[200px] relative w-[200px] '>
                                        <div className='absolute rounded-[inherit] top-0 right-0 left-0 bottom-0'>
                                            <Image src={our} alt='' fill={true} className='rounded-[inherit]' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-start flex-shrink-0 flex-grow-[1] basis-0 h-auto relative whitespace-pre-wrap '>
                                        <p className='font-normal text-[#015840] text-[20px] tracking-tight leading-[2rem]  text-start m-0 p-0'>
                                            <span className='font-normal text-[#015840] text-[20px] tracking-tight leading-[2rem]  text-start m-0 p-0 '>My first job search sucked. Despite working my ass off to pass all my classes and learn skills, I kept getting rejected. Why?</span>
                                            <br />
                                            <br />
                                            <span className='font-normal text-[#015840] text-[20px] tracking-tight leading-[2rem]  text-start m-0 p-0 '>Well, my roommate told me: “Rod you have to play the game”. He taught me how the skills you learn for a job are completely different from the skills you need to get a job.</span>

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col items-start justify-center flex-none gap-8 h-min relative w-full'>
                                <div className='flex flex-col gap-4 items-start justify-start h-min relative w-full flex-none '>
                                    <div className='flex gap-2 flex-none rounded-[100px] items-center justify-center bg-[#cfff92] h-min py-[4px] px-4 relative w-min '>
                                        <div className='flex justify-center items-center flex-none gap-0 h-min relative w-min p-0 '>
                                            <div className='[image-rendering:pixelated] relative flex-shrink-0 fill-black text-black'>
                                                <Image src={problem} alt='' fill={true} />
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre w-auto'>
                                            <p className='font-normal text-[#015840] text-[1rem] leading-[1.5rem] text-start'>Problem</p>
                                        </div>
                                    </div>

                                    <div className='border-l-4 border-[#987de1] flex flex-none h-min pl-6 w-full relative'>
                                        <div className='flex flex-col justify-start flex-shrink-0 flex-grow-[1] basis-0 h-auto relative'>
                                            <h3 className='font-normal text-[#015840] text-[2rem] tracking-tight leading-[1.2em] text-start '>I saw hard-working people go through the same thing I did. </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-none items-center gap-8 h-min flex-col  justify-center relative w-full '>

                                    <div className='flex flex-col justify-start flex-shrink-0 w-full float-none basis-0 h-auto relative whitespace-pre-wrap '>
                                        <p className='font-normal text-[#015840] text-[20px] tracking-tight leading-[2rem]  text-start m-0 p-0'>
                                            <span className='font-normal text-[#015840] text-[20px] tracking-tight leading-[2rem]  text-start m-0 p-0 '>I figured out the formula and got hired shortly after.</span>
                                            <br />
                                            <br />
                                            <span className='font-normal text-[#015840] text-[20px] tracking-tight leading-[2rem]  text-start m-0 p-0 '>15 months later, I started teaching Data Science and Career Coaching at a bootcamp. I saw hard-working people go through the same thing I did. Struggling to get hired despite being super talented.</span>

                                        </p>
                                    </div>


                                    <div className=' rounded-[24px]  flex-none h-[320px] relative w-full '>
                                        <div className='absolute rounded-[inherit] top-0 right-0 left-0 bottom-0'>
                                            <Image src={prob} alt='' fill={true} className='rounded-[inherit]' />
                                        </div>
                                        <div className='absolute h-[104px] left-[-53px] top-[268px] w-[105px] '>
                                            <Image src={orangestar} alt='' fill={true} />
                                        </div>
                                        <div className='absolute h-[104px] right-[-42px] top-[-52px] w-[105px] '>
                                            <Image src={orangestar} alt='' fill={true} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col items-start justify-center flex-none gap-8 h-min relative w-full'>
                                <div className='flex flex-col gap-4 items-start justify-start h-min relative w-full flex-none '>
                                    <div className='flex gap-2 flex-none rounded-[100px] items-center justify-center bg-[#cfff92] h-min py-[4px] px-4 relative w-min '>
                                        <div className='flex justify-center items-center flex-none gap-0 h-min relative w-min p-0 '>
                                            <div className='[image-rendering:pixelated] relative flex-shrink-0 fill-black text-black'>
                                                <Image src={solution} alt='' fill={true} />
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre w-auto'>
                                            <p className='font-normal text-[#015840] text-[1rem] leading-[1.5rem] text-start'>Solution</p>
                                        </div>
                                    </div>

                                    <div className='border-l-4 border-[#987de1] flex flex-none h-min pl-6 w-full relative'>
                                        <div className='flex flex-col justify-start flex-shrink-0 flex-grow-[1] basis-0 h-auto relative'>
                                            <h3 className='font-normal text-[#015840] text-[2rem] tracking-tight leading-[1.2em] text-start '>I saw hard-working people go through the same thing I did. </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-none items-center gap-8 h-min flex-col  justify-center relative w-full '>

                                    <div className='flex flex-col justify-start flex-shrink-0 w-full float-none basis-0 h-auto relative whitespace-pre-wrap '>
                                        <p className='font-normal text-[#015840] text-[20px] tracking-tight leading-[2rem]  text-start m-0 p-0'>
                                            <span className='font-normal text-[#015840] text-[20px] tracking-tight leading-[2rem]  text-start m-0 p-0 '>I figured out the formula and got hired shortly after.</span>
                                            <br />
                                            <br />
                                            <span className='font-normal text-[#015840] text-[20px] tracking-tight leading-[2rem]  text-start m-0 p-0 '>15 months later, I started teaching Data Science and Career Coaching at a bootcamp. I saw hard-working people go through the same thing I did. Struggling to get hired despite being super talented.</span>

                                        </p>
                                    </div>


                                    <div className=' rounded-[24px]  flex-none h-[320px] relative w-full '>
                                        <div className='absolute rounded-[inherit] top-0 right-0 left-0 bottom-0'>
                                            <Image src={prob} alt='' fill={true} className='rounded-[inherit]' />
                                        </div>
                                        <div className='absolute h-[104px] left-[-53px] top-[268px] w-[105px] '>
                                            <Image src={orangestar} alt='' fill={true} />
                                        </div>
                                        <div className='absolute h-[104px] right-[-42px] top-[-52px] w-[105px] '>
                                            <Image src={orangestar} alt='' fill={true} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col items-start justify-center flex-none gap-8 h-min relative w-full'>
                                <div className='flex flex-col gap-4 items-start justify-start h-min relative w-full flex-none '>
                                    <div className='flex gap-2 flex-none rounded-[100px] items-center justify-center bg-[#cfff92] h-min py-[4px] px-4 relative w-min '>
                                        <div className='flex justify-center items-center flex-none gap-0 h-min relative w-min p-0 '>
                                            <div className='[image-rendering:pixelated] relative flex-shrink-0 fill-black text-black'>
                                                <Image src={solution} alt='' fill={true} />
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre w-auto'>
                                            <p className='font-normal text-[#015840] text-[1rem] leading-[1.5rem] text-start'>Solution</p>
                                        </div>
                                    </div>

                                    <div className='border-l-4 border-[#987de1] flex flex-none h-min pl-6 w-full relative'>
                                        <div className='flex flex-col justify-start flex-shrink-0 flex-grow-[1] basis-0 h-auto relative'>
                                            <h3 className='font-normal text-[#015840] text-[2rem] tracking-tight leading-[1.2em] text-start '>I saw hard-working people go through the same thing I did. </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-none items-center gap-8 h-min flex-col  justify-center relative w-full '>

                                    <div className='flex flex-col justify-start flex-shrink-0 w-full float-none basis-0 h-auto relative whitespace-pre-wrap '>
                                        <p className='font-normal text-[#015840] text-[20px] tracking-tight leading-[2rem]  text-start m-0 p-0'>
                                            <span className='font-normal text-[#015840] text-[20px] tracking-tight leading-[2rem]  text-start m-0 p-0 '>I figured out the formula and got hired shortly after.</span>
                                            <br />
                                            <br />
                                            <span className='font-normal text-[#015840] text-[20px] tracking-tight leading-[2rem]  text-start m-0 p-0 '>15 months later, I started teaching Data Science and Career Coaching at a bootcamp. I saw hard-working people go through the same thing I did. Struggling to get hired despite being super talented.</span>
                                            <br />
                                            <br />
                                            <span className='font-normal text-[#015840] text-[20px] tracking-tight leading-[2rem]  text-start m-0 p-0 '>I figured out the formula and got hired shortly after.</span>

                                        </p>
                                    </div>



                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className='bmLLL:px-[64px] bmLLL:pb-[64px] flex justify-center h-min items-center flex-none px-[0]py-[64px] w-full'>
                <div className='bmLLL:max-[1180px]  flex-grow-[1] flex-shrink-0 basis-0 rounded-[24px] items-center justify-start  flex relative '>
                    <div className='rounded-[24px] overflow-hidden flex items-center justify-center h-min bg-[#ffecdc] p-[44px] relative w-full '>
                        <div className='absolute bmLLL:left-[-274px] left-[-170px] flex-none items-center flex h-min justify-center top-[50%] translate-y-[-50%]  z-[0] [image-rendering:pixelated] overflow-hidden flex-shrink-0 aspect-[1.33/1]  w-[648px]'>
                            <Image src={bgstars} alt='' />
                        </div>
                        <div className='flex items-start flex-grow-[1] flex-shrink-0 basis-0 gap-6 h-min justify-start relative'>
                            <div className='flex flex-col gap-0 justify-start flex-shrink-0 flex-grow-[.75] basis-0 relative whitespace-pre-wrap '>
                                <h1 className='font-normal text-[#015840] text-[64px] tracking-[.01em] leading-[1.2em]  text-start'>
                                    What is
                                </h1>
                                <h1 className='font-normal text-[#015840] text-[64px] tracking-[.01em] leading-[1.2em]  text-start'>
                                    Prentus?
                                </h1>
                            </div>
                            <div className='flex flex-col justify-start flex-shrink-0 flex-grow-[1] basis-0 h-auto relative whitespace-pre-wrap'>
                                <p className='font-normal text-[#015840] text-[20px] tracking-tight leading-[32px] text-start '>Prentus is a career success platform to go from learning to earning by leveraging the power of AI, community and you. Built to serve outcome-oriented schools and jobseekers, we provide the tools and processes to save coaches up to 25 hours per week and make candidates even more hireable.</p>
                                <br />
                                <br />
                                <p className='font-normal text-[#015840] text-[20px] tracking-tight leading-[32px] text-start '>Prentus is a career success platform to go from learning to earning by leveraging the power of AI, community and you. Built to serve outcome-oriented schools and jobseekers, we provide the tools and processes to save coaches up to 25 hours per week and make candidates even more hireable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-none items-center h-min flex-col justify-center overflow-hidden p-[64px] relative w-full '>
                <div className='bmL4k:max-w-[1312px] flex flex-col items-center flex-none justify-start gap-[80px] relative w-full'>
                    <div className='flex flex-none items-center justify-start h-min relative w-min'>
                        <div className='flex flex-col flex-shrink-0 justify-start flex-none h-auto relative whitespace-pre w-auto'>
                            <h2 className='font-normal text-[#015840] text-[44px] tracking-tight leading-[1rem] text-center'>Our values</h2>
                        </div>
                        <div className='absolute flex items-center justify-center flex-none h-min right-[-103px] top-[50%]  translate-y-[-50%] z-[1]'>
                            <div className=' [image-rendering:pixelated] w-[88px] h-[58px] relative'>
                                <Image src={headstar} alt='' fill={true} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col flex-none justify-center items-center gap-6 h-[720px] relative w-full'>
                        <div className='flex gap-6 flex-grow-[1] flex-shrink-0 basis-0 relative w-full'>
                            <div className='flex flex-grow-[1] flex-shrink-0 items-start basis-0 bg-[#cfff92] rounded-[24px] flex-col h-full justify-between p-[32px] relative'>
                                <div className='flex-none h-[120px] w-[120px] relative'>
                                    <Image src={cardheader} alt='' fill={true} />
                                </div>
                                <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full '>
                                    <h2 className='font-normal text-[#015840] text-[44px] tracking-tight leading-[2rem] text-start '>The power</h2>
                                    <h2 className='font-normal text-[#015840] text-[44px] tracking-tight leading-[2rem] text-start '>of technology</h2>
                                </div>
                                <div className='rotate-[25deg] flex-none h-[66px] w-[66px] border-[2.5px] border-[#311f40] bg-[#ffae67] rounded-[1000px] absolute left-[calc(50%-66px/2)] top-[-33px] z-[1] '>
                                    <div className='flex flex-col justify-start translate-x-[-50%] translate-y-[-50%]   absolute left-[49%] top-[51%] w-auto '>
                                        <h4 className=' font-normal text-[#015840] text-[24px] tracking-tight leading-[2rem] text-start '>#2</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-grow-[1] flex-shrink-0 items-start basis-0 bg-[#cfff92] rounded-[24px] flex-col h-full justify-between p-[32px] relative'>
                                <div className='flex-none h-[120px] w-[120px] relative'>
                                    <Image src={cardheader} alt='' fill={true} />
                                </div>
                                <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full '>
                                    <h2 className='font-normal text-[#015840] text-[44px] tracking-tight leading-[2rem] text-start '>The power</h2>
                                    <h2 className='font-normal text-[#015840] text-[44px] tracking-tight leading-[2rem] text-start '>of technology</h2>
                                </div>
                                <div className='rotate-[25deg] flex-none h-[66px] w-[66px] border-[2.5px] border-[#311f40] bg-[#ffae67] rounded-[1000px] absolute left-[calc(50%-66px/2)] top-[-33px] z-[1] '>
                                    <div className='flex flex-col justify-start translate-x-[-50%] translate-y-[-50%]   absolute left-[49%] top-[51%] w-auto '>
                                        <h4 className=' font-normal text-[#015840] text-[24px] tracking-tight leading-[2rem] text-start '>#2</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-6 flex-grow-[1] flex-shrink-0 basis-0 relative w-full'>
                            <div className='flex flex-grow-[1] flex-shrink-0 items-start basis-0 bg-[#cfff92] rounded-[24px] flex-col h-full justify-between p-[32px] relative'>
                                <div className='flex-none h-[120px] w-[120px] relative'>
                                    <Image src={cardheader} alt='' fill={true} />
                                </div>
                                <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full '>
                                    <h2 className='font-normal text-[#015840] text-[44px] tracking-tight leading-[2rem] text-start '>The power</h2>
                                    <h2 className='font-normal text-[#015840] text-[44px] tracking-tight leading-[2rem] text-start '>of technology</h2>
                                </div>
                                <div className='rotate-[25deg] flex-none h-[66px] w-[66px] border-[2.5px] border-[#311f40] bg-[#ffae67] rounded-[1000px] absolute left-[calc(50%-66px/2)] top-[-33px] z-[1] '>
                                    <div className='flex flex-col justify-start translate-x-[-50%] translate-y-[-50%]   absolute left-[49%] top-[51%] w-auto '>
                                        <h4 className=' font-normal text-[#015840] text-[24px] tracking-tight leading-[2rem] text-start '>#2</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-grow-[1] flex-shrink-0 items-start basis-0 bg-[#cfff92] rounded-[24px] flex-col h-full justify-between p-[32px] relative'>
                                <div className='flex-none h-[120px] w-[120px] relative'>
                                    <Image src={cardheader} alt='' fill={true} />
                                </div>
                                <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full '>
                                    <h2 className='font-normal text-[#015840] text-[44px] tracking-tight leading-[2rem] text-start '>The power</h2>
                                    <h2 className='font-normal text-[#015840] text-[44px] tracking-tight leading-[2rem] text-start '>of technology</h2>
                                </div>
                                <div className='rotate-[25deg] flex-none h-[66px] w-[66px] border-[2.5px] border-[#311f40] bg-[#ffae67] rounded-[1000px] absolute left-[calc(50%-66px/2)] top-[-33px] z-[1] '>
                                    <div className='flex flex-col justify-start translate-x-[-50%] translate-y-[-50%]   absolute left-[49%] top-[51%] w-auto '>
                                        <h4 className=' font-normal text-[#015840] text-[24px] tracking-tight leading-[2rem] text-start '>#2</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='flex flex-none items-center h-min justify-center py-[64px] relative w-full'>
                <div className='bmL4k:max-w-[1312px] flex flex-grow-[1] flex-shrink-0 basis-0 h-min relative w-full'>
                    <div className='flex flex-none items-start gap-6 justify-start p-0 relative w-full'>
                        <div className='bg-[#ffae67] items-start rounded-[24px] flex-grow-[1] flex-shrink-0 basis-0 flex flex-col h-min justify-start p-[44px] relative '>
                            <div className='flex flex-col items-start flex-none gap-6 h-min justify-start relative w-full'>
                                <div className='w-min px-4 py-2  flex justify-center items-center '>
                                    <p className='font-normal text-[#015840] text-[26px] leading-[2] whitespace-nowrap text-start '>Our promise</p>
                                </div>
                                <div className='border-[#cfff92] border-l-8 border-solid items-center h-min py-0 px-8 relative w-full '>
                                    <div className='flex flex-col justify-start flex-shrink-0 flex-grow-[1] basis-0 h-auto relative whitespace-pre-wrap '>
                                        <h3 className='font-normal text-[#015840] text-[32px] tracking-tight leading-[2] text-start  '>“We make the job search enjoyable for new grads, the institutions that educated them, and the employers that are about to hire them — ensuring that no one has to job hunt alone.”</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
