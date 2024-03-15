"use client"

import React, { useState, useEffect } from 'react';
import productsData from '@/public/data.json'; // Adjust the path to your data.json file
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Carousel from '@/components/Corosuel';

function ProductDetails({ params }) {
  const [product, setProduct] = useState(null);
  console.log(params)

  useEffect(() => {
    const foundProduct = productsData.products.find(
      (product) => product.slug === params.id
    );
    setProduct(foundProduct);
  }, [params]);


  return (
    <div>
      <Navbar />
      {product ? (

        <div className='bg-gray-100'>
          <div className="container mx-auto p-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              {/* Product Length images corosuel */}
              {/* {product.image.length > 1 ? (
                <Carousel images={product.image} />
              ) : ( */}
                <img
                  src={product.image[0]}
                  alt={product.title}
                  className="w-[80%] p-3 flex mx-auto rounded h-64 object-cover object-center"
                />
              {/* )} */}
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{product.desc}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-semibold">Technologies:</p>
                    <ul className="list-disc ml-4">
                      {product.tech.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Category:</p>
                    <p>{product.category.join(', ')}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-semibold">Clients Used:</p>
                    <ul className="list-disc ml-4">
                      {product.clients ? (product.clients.map((client, index) => (
                        <li key={index}>{client}</li>
                      ))) : (<li>Product not found</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Features:</p>
                    <ul className="list-disc ml-4">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                </div>
                { product.videoUrl ?(
            <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Product Video</h2>
            <div className="relative flex justify-center" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe
                src={product.videoUrl}
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="false"
                className="absolute top-0 left-0 w-[80%] h-[80%] text-center mx-auto"
              ></iframe>
            </div>
          </div>
          ):(<></>)}

              </div>
            </div>
          </div>
     
        </div>
      ) : (
        <p>Product not found</p>
      )}
      <Footer />
    </div>
  );
}


export default ProductDetails;
