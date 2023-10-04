import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
   
}

const Aboutdata: datatype[] = [
    {
        heading: "About us.",
        imgSrc: "/assets/aboutus/imgOne.svg",
        paragraph: 'We strive to provide the highest quality content and services that enable our users to thrive in the ever-evolving world of AI.',
        
    },
    {
        heading: "Services.",
        imgSrc: "/assets/aboutus/imgTwo.svg",
        paragraph: 'We cover various AI domains, including machine learning, deep learning, computer vision, natural language processing, and reinforcement learning.',
        
    },
    {
        heading: "Our Works.",
        imgSrc: "/assets/aboutus/imgThree.svg",
        paragraph: 'We are dedicated to empowering individuals and businesses with the knowledge, tools, and services necessary to succeed in the AI era.',
        
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section" style={{ background: 'linear-gradient(to right, #FF6B6B, #3490DE)' }}>
      <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-opacity-60 rounded-3xl relative'>
                <Image src="/assets/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-white text-lg tracking-widest'>ABOUT US</h3>
        <h4 className='text-center text-6xl text-white lg:text-65xl font-bold'>Know more about us.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-blue-900 mb-5 group-hover:text-blue-600'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-xl font-sans text-slate-700 group-hover:text-gray-500 mb-5'>{item.paragraph}</h4>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;