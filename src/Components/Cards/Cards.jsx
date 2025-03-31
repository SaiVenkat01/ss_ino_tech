
import React from 'react'

import plastic_bag from '../../assets/plastic_bag.jpeg'
import biodegradable_plastic from '../../assets/biodegradable_plastic.jpeg'
import compostable_bag from '../../assets/compostable_bag.jpeg'

const CardLayout = () => {
    const cards = [
      {
        title: "Non-Biodegradable",
        text: [
            "Petroleum based products like plastic",
            "100+ years to disintegrate",
            "Harmful carbon emissions",
            "Difficult and costly to recycle",
            "Highly dangerous for the ecosystem"
        ],
        img: plastic_bag
      },
      {
        title: "Biodegradable",
        text: [
            "Long time to dissolve/disintegrate",
            "Non-toxic, reduces carbon emissions",
            "Costly & dangerous for the ecosystem"
        ],
        img: biodegradable_plastic
      },
      {
        title: "Compostable",
        text: [
            "100% Organic",
            "Non-toxic and BPA free",
            "Disintegrates within months",
            "Eliminates the need to recycle",
            "Cost Effective"
        ],
        img: compostable_bag
      },
    ];
  
    return (
        <div className="flex flex-wrap justify-center gap-4 px-6 md:px-20 lg:px-40 mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="max-w-xs w-full bg-blue-200 border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-300 h-40 flex items-center justify-center text-gray-500">
                {/* Using card.img instead of undefined img variable */}
                {card.img ? <img src={card.img} alt={card.title} className="h-full w-full object-cover" /> : "286x200"}
              </div>
              <div className="p-6">
                <h5 className="text-xl font-bold mb-4">{card.title}</h5>
                <ul className="space-y-2 pl-5 pr-2">
                  {card.text.map((point, idx) => (
                    <li key={idx} className="flex">
                      <span className="text-gray-600 mr-2">•</span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      );
  }

export default CardLayout