import Image from "next/image";

const Dedicated = () => {
    return (
        <div className="relative">

            <Image src="/assets/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />

            <div className='mx-auto max-w-7xl px-4 my-60 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/assets/dedicated/profile.svg" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <Image src="assets/dedicated/comma.svg" alt="comma-image" width={220} height={100} className="absolute comma-pos hidden lg:block" />
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">My journey in the world of AI began with a deep fascination for the endless possibilities it holds.</h2>
                        
                        <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start"> Krishan Sharma, Founder</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
