import React from 'react';
import LogoCarousel from './LogoCorosuel';
import FancyTestimonialsSlider from './FancyTestimonialsSlider';

const OurClients = () => {

  const reviews = [
    {
      name: 'John Doe',
      company: 'Cipla',
      img:"/assets/cipla.png",
      review: 'The software developed by this company has streamlined our operations and increased efficiency significantly.',
    },
    {
      name: 'Jane Smith',
      img:"/assets/suven.jpg",
      company: 'Suven Life Science',
      review: 'We are extremely satisfied with the software solutions provided. They truly understand our industry needs.',
    },
    {
        name: 'Anny thinder',
        img:"/assets/Sun_pharma.png",
        company: 'Sun Pharma',
        review: 'We are extremely satisfied with the software solutions provided. They truly understand our industry needs.',
      },
    // Add more reviews as needed
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Clients</h2>
        
          <LogoCarousel />
    
        <h2 className="text-3xl font-bold mb-8 mt-16 text-center">Client Reviews</h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{review.name}</h3>
              <p className="text-gray-600 mb-2">{review.company}</p>
              <p className="text-gray-800">{review.review}</p>
            </div>
          ))}
        </div> */}
        <FancyTestimonialsSlider testimonials={reviews} />
      </div>
    </div>
  );
};

export default OurClients;