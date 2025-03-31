import React, { useEffect, useState } from 'react';
import product1 from 'src/assets/Products/Product_1.jpg';
import product2 from 'src/assets/Products/Product_2.jpg';
import product3 from 'src/assets/Products/Product_3.jpg';
import product4 from 'src/assets/Products/Product_4.jpg';
import product5 from 'src/assets/Products/Product_5.jpg';
import product6 from 'src/assets/Products/Product_6.jpg';
import product7 from 'src/assets/Products/Product_7.jpg';

const LogoSlider = () => {
  const [position, setPosition] = useState(0);
  
  // Sample logos - replace these with your actual logo imports
  const logos = [
    { id: 1, src: product1, alt: 'product1' },
    { id: 2, src: product2, alt: 'product2' },
    { id: 3, src: product3, alt: 'product3' },
    { id: 4, src: product4, alt: 'product4' },
    { id: 5, src: product5, alt: 'product5' },
    { id: 6, src: product6, alt: 'product6' },
    { id: 7, src: product7, alt: 'product7' },
    // Add more logos as needed
  ];
  
  // Animation effect for continuous sliding
  useEffect(() => {
    const animationInterval = setInterval(() => {
      // setPosition((prevPosition) => {
      //   // Reset position when all logos have moved out of view
      //   if (prevPosition <= -100 * (logos.length / 2)) {
      //     return 0;
      //   }
      //   return prevPosition - 0.5; // Adjust speed by changing this value
      // });
      setPosition((prevPosition) => {
        const resetPosition = -logos.length * 300; // Adjust width for smooth transition
        return prevPosition <= resetPosition ? 0 : prevPosition - 1.5; // Adjust speed
      });
    }, 30);
    
    return () => clearInterval(animationInterval);
  }, [logos.length]);
  
  return (
    <div className="w-full py-12">
      <div className="container mx-auto text-center mb-6">
        <h2 className="text-4xl font-bold text-green-600">
            OUR PRODUCTS
        </h2>
      </div>
      
      <div className="relative overflow-hidden w-full">
        <div 
          className="flex items-center gap-6 transition-transform"
          style={{ 
            transform: `translateX(${position}px)`,
            width: `${logos.length * 720}px` // Ensure enough width for all logos
          }}
        >
          {/* Display all logos twice to create seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="flex w-300 h-100 bg-white shadow-md rounded-xl items-center justify-center p-2">
              <img
                src={logo.src} 
                alt={logo.alt} 
                className="w-300 h-100 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;


