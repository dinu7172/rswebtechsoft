import React from 'react';
import { CircleStackIcon, CalculatorIcon, ScaleIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';

const ServiceComponent = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Services</h2>
        <p className='text-xl text-center mb-10'>We are providing expert development of custom software applications and 
            offers custom design and cost effective services according to need. We executes projects both offsite and 
            onsite primarily focusing on the following areas.
        </p>
            
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {/* Service Card 1: Mobile Development */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <CircleStackIcon className="h-8 w-8 mx-auto mb-4 text-indigo-500" />
              <h3 className="text-xl font-semibold text-center mb-2">Web Development</h3>
              <p className="text-gray-600 text-center">web based applications development which includes new web-based development applications, 
              web-enabling legacy applications, developing portals, transaction processing services, b2b and b2c e-commerce solutions like supply chain management, 
              direct marketing systems, vendor management services, retail services and financial services.</p>
            </div>
          </div>
          {/* Service Card 2: Software Development */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <CalculatorIcon className="h-8 w-8 mx-auto mb-4 text-indigo-500" />
              <h3 className="text-xl font-semibold text-center mb-2">Software Development</h3>
              <p className="text-gray-600 text-center">We maintains an extensive development center with a broad selection of hardware, software and operating systems. 
              This allows us to develop and test our applications across a full range of target platforms. 
              Our development center is equipped with state-of-art infrastructure</p>
            </div>
          </div>
          {/* Service Card 3: Web Development */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <ScaleIcon className="h-8 w-8 mx-auto mb-4 text-indigo-500" />
              <h3 className="text-xl font-semibold text-center mb-2">Consulting</h3>
              <p className="text-gray-600 text-center">provides consulting services to various corporate to solve their specific needs. 
              We believe in merging our specific expertise and the vast functional experience of the corporate to provide best possible solution to suit their needs.</p>
            </div>
          </div>
          {/* Service Card 4: Domain & Hosting */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <BuildingOffice2Icon className="h-8 w-8 mx-auto mb-4 text-indigo-500" />
              <h3 className="text-xl font-semibold text-center mb-2">Domain & Hosting</h3>
              <p className="text-gray-600 text-center">Get domain registration and hosting services for your website.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
