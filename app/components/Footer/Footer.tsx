import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Menu",
        link: ['Home', 'Course', 'Mentor', 'Resourses'],
    },
    {
        id: 2,
        section: "Courses",
        link: ['Machine learning', 'UI/UX', 'Blockchain', 'IOT']
    },
    {
        id: 3,
        section: "Pages",
        link: ['Community', 'Upcoming', 'Blogs', 'Career']
    },
    {
        id: 4,
        section: "Social Media",
        link: ['Twitter', 'Discord', 'Instagram', 'Youtube']
    }
]

const footer = () => {
    return (
        <div className="bg-custom-color -mt-64" id="first-section">
            <div className="mx-auto max-w-2xl pt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4'>
                        <img src={'/assets/logo/Logo.png'} alt="logo" className='pb-4   h-24 w-15 ' />
                        <h3 className='text-black text-lg font-medium leading-9 mb-4 lg:mb-20'> Level up your skills, and get dream <br /> job with passion. </h3>
                        <div className='flex gap-4'>
                            <Link href="/"><img src={'/assets/footer/insta.svg'} alt="instagram" className='footer-icons' /></Link>
                            <Link href="/"><img src={'/assets/footer/dribble.svg'} alt="dribble" className='footer-icons' /></Link>
                            <Link href="/"><img src={'/assets/footer/twitter.svg'} alt="twitter" className='footer-icons' /></Link>
                            <Link href="/"><img src={'/assets/footer/youtube.svg'} alt="youtube" className='footer-icons' /></Link>
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    {products.map((product) => (
    <div key={product.id} className="group relative col-span-2">
        <p className="text-green-500 text-xl font-semibold mb-9">{product.section}</p>
        <ul>
            {product.link.map((link: string, index: number) => (
                <li key={index} className='mb-5'>
                    {/* Update the href for each link based on your page/component structure */}
                    <Link href={`/${link.toLowerCase()}`} className="text-green-300 text-base font-normal mb-6 space-links">
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
))}

                    {/* CLOUMN-4 */}

                  

                </div>
            </div>

            {/* All Rights Reserved */}

            <div className='pb-24 px-4'>
                <h3 className='text-center text-offblack'>@2023 - All Rights Reserved by <Link href="https://adminmart.com/" target="_blank"> Aihubpro.com</Link></h3>
            </div>

        </div>
    )
}

export default footer;
