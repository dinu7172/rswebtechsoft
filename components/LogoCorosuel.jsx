import React from 'react';
import Image from 'next/image';
// Import your images from the public directory

const LogoCarousel = () => {
  return (
    <main className="relative  flex flex-col justify-center bg-slate-100 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-5">
            <div className="text-center">
{/* Logo Corosuel Animation */}
                <div
                    x-data="{}"
                    x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
                            <img width={100} height={100} src="/assets/cipla.png" alt="cipla" />
                        </li>
                        <li>
                            <img width={100} height={100} src="/assets/Alkem_logo.png" alt="Alkem" />
                        </li>
                        <li>
                            <img className='rounded-full' width={100} height={100} src="/assets/Sun_pharma.png" alt="SunPharma" />
                        </li>
                        <li>
                            <img className='rounded-full' width={100} height={100} src="/assets/suven.jpg" alt="Apple" />
                        </li>
                        <li>
                            <img className='rounded-full' width={100} height={100} src="/assets/logo.png" alt="Spark" />
                        </li>
                        <li>
                            <img className='rounded-full' width={100} height={100} src="/assets/image.jpg" alt="Samsung" />
                        </li>
                        <li>
                            <img className='rounded-full' width={100} height={100} src="/assets/logo.png" alt="Quora" />
                        </li>
                        <li>
                            <img className='rounded-full' width={100} height={100} src="/assets/suven.jpg" alt="Sass" />
                        </li>
                    </ul>    
                    <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
                            <img className='rounded-full' width={100} height={100} src="/assets/cipla.png" alt="cipla" />
                        </li>
                        <li>
                            <img className='rounded-full' width={100} height={100} src="/assets/Alkem_logo.png" alt="Alkem" />
                        </li>
                        <li>
                            <img className='rounded-full' width={100} height={100} src="/assets/Sun_pharma.png" alt="SunPharma" />
                        </li>
                        <li>
                            <img className='rounded-full' width={100} height={100} src="/assets/suven.jpg" alt="Apple" />
                        </li>
                        <li>
                            <img className='rounded-full' width={100} height={100} src="/assets/logo.png" alt="Spark" />
                        </li>
                        <li>
                            <img className='rounded-full' width={100} height={100} src="/assets/image.jpg" alt="Samsung" />
                        </li>
                        <li>
                            <img className='rounded-full' width={100} height={100} src="/assets/logo.png" alt="Quora" />
                        </li>
                        <li>
                            <img className='rounded-full' width={100} height={100} src="/assets/suven.jpg" alt="Sass" />
                        </li>
                    </ul>                
                </div>
                {/* <!-- End: Logo Carousel animation --> */}
                
            </div>

        </div>
    </main>
  );
};

export default LogoCarousel;
