import Image from "next/image";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className='py-6 text-center lg:text-start'>
                        <button className='text-red-900 bg-red-300 hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-red-600 hover:bg-red-300'>AI Revolution</button>
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-7xl lg:text-90xl font-bold text-indigo-900'>
                        Empowering <br /> You in the<br /> World  of AI <br />and Machine Learning 
                        </h1>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue-200 text-blue-800 py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-blue-300'>
                            Get Started
                        </button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-24 lg:pt-15 hidden lg:block'>
                    <Image src="/assets/banner/banner.svg" alt="hero-image" width={800} height={642} />
                </div>

            </div>
        </div>
    )
}

export default Banner;
