import Image from "next/image"

const HeroBanner = () => {
    return (
        <div className="hero">
            <section className="dark:bg-gray-800 bg-gray-100 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-5 md:py-2 lg:pb-20 lg:pt-5 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <p className="p-2 text-3xl font-bold text-violet-500">At</p>
                        <h1 className="text-3xl font-bold leadi sm:text-6xl foot-logo">RSWeb
                            <span className="text-violet-500 foot-logo">TechSoft</span>
                        </h1>
                      <div className="center mt-6 mb-8 text-lg sm:mb-12">
                      <p className="">- Technology meets emotions and limits are higher than the sky.</p>

                    <p className=" ">- A complete software solution to your business.</p>

                      </div>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded bg-violet-500 text-white dark:border-gray-100">Contact Us</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <Image 
                        src="assets/Business_SVG.svg" 
                        alt="" 
                        width={500}
                        height={500}
                        className="object-contain sm:pr-9 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 animate-fadeInUp" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroBanner