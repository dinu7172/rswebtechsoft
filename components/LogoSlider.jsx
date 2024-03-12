import Image from 'next/image'
import business from '@/public/assets/Alkem_logo.png';
import biocon from '@/public/assets/logo.png'
import sun from '@/public/assets/image.jpg'


export default function LogoSlider() {

  const logos = [
    { name: 'Lupin', image:  business},
    { name: 'Biocon', image: biocon },
    { name: 'Sun Pharma', image: sun },
    { name: 'Sun Pharma', image: sun },
    { name: 'Sun Pharma', image: sun },
    { name: 'Sun Pharma', image: sun },
   
  ]

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image className='w-10 h-16' src={logo.image} alt={logo.name} width="auto" height="auto" />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image className='w-10 h-16' src={logo.image} alt={logo.name} width="auto" height="auto" />
          </li>
        ))}
      </ul>
    </div>
  )
}