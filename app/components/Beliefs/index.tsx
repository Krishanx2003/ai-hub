
const Beliefs = () => {
    return (
        <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

                {/* COLUMN-1 */}

                <div className="bg-blue-900 bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">BELIEFS</h2>
                    <h3 className="text-6xl sm:text-65xl font-bold text-gray-600 leading-snug mb-5 text-center sm:text-start">Fostering <br /> <span className="text-gray-300"> a Collaborative Community</span></h3>
                    <h5 className="text-white pt-2 mb-5 text-center sm:text-start">Community-driven platform encourages the sharing of ideas, experiences, and knowledge, creating an environment that nurtures growth and innovation.</h5>
                    <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue-600 border border-blue hover:bg-blue-300">Get Started</button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className="bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">BUILD</h2>
                    <h3 className="text-6xl sm:text-65xl font-bold text-blue-900 leading-snug mb-5 text-center sm:text-start"><span className="text-rose-900">Passion</span>  for AI and a Vision for the Future</h3>
                    <h5 className="bluish pt-2 mb-5 text-center sm:text-start">Platform that would make AI education, tools, and applications accessible to all, regardless of their background or expertise.</h5>
                    <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold bg-cyan-100 rounded-full  border border-blue hover:bg-blue-300">Learn more</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Beliefs;
