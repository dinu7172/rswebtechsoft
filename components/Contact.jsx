import React, { useRef } from 'react';
import { DevicePhoneMobileIcon, MapPinIcon, EnvelopeOpenIcon } from '@heroicons/react/24/outline';


const Contact = () => {
    
  return (
    <section id='contact' className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
      <p className='text-xl text-center mb-10'>Feel Free to Contact Us
      </p>
          
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 justify-center lg:grid-cols-3">
        {/* Service Card 1: Mobile Development */}
        <div className="bg-white hover:shadow-2xl p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <DevicePhoneMobileIcon className="h-16 w-20 mx-auto text-xl mb-4 text-indigo-500" />
                <h3 className="text-xl font-semibold text-center mb-2">Mobile Phone</h3>
            <p className="text-gray-600 text-center text-xl"> Customer service 24/7 </p>
            <p className="text-gray-600 text-center text-xl">Call Free On <a className='text-blue-500' href="tel:9820566521">+91 - 9820566521</a></p>

<p>Contact us for any query we will help you.</p>
          </div>
        </div>
        {/* Service Card 2: Software Development */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <EnvelopeOpenIcon className="h-16 w-20 mx-auto mb-4 text-indigo-500" />
            <h3 className="text-xl font-semibold text-center mb-2">E-Mail</h3>
            <p className="text-gray-600 text-lg text-center">We're ready to support just email your query</p>
            <p className='text-center'><a className='text-blue-500 text-lg text-center' href="mailto:contact@rswebsoftech.com">contact@rswebsoftech.com</a></p>
          </div>
        </div>
        {/* Service Card 3: Web Development */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <MapPinIcon className="h-16 w-20 mx-auto mb-4 text-indigo-500" />
            <h3 className="text-xl font-semibold text-center mb-2">VISIT US</h3>
            {/* <p className="text-gray-600 text-start">Address</p> */}
            <p className="text-gray-600 pt-5 text-center">A -SH-05 Shiv Palace Chs Ltd, Kasturi Park, Bhayandar (East)- 401105, Mumbai, India</p>
          </div>
        </div>
        
      </div>
    </div>
    <div className="map px-5 sm:px-12 py-10">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3765.3286208568966!2d72.8567301441803!3d19.31154134638573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4246303fbe9db0d5!2sRSWEBTECHSOFT!5e0!3m2!1sen!2sin!4v1508249936564" height="300" width="100%" style={{border:"none"}} allowFullScreen=""></iframe>
    </div>
  </section>
  )
}

export default Contact