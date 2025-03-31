import React from 'react';
import {IoArrowForward} from 'react-icons/io5';
import AboutImg from '../../assets/logo_no_bg_crop.png';

const VisionMission = () => {
  return (
    <div id='About' className='text-green-600 md:flex overflow-hidden items-center md:flex-wrap md:justify-center shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='flex text-2xl justify-center md:text-4xl font-bold'>VISION AND MISSION</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <ul>
                    <div className='flex gap-3 py-4'>
                        <p>
                        The Earth was capable of taking back whatever it gave us. That is before the advent of plastic.
                         As of 2022, 76 trillion tonnes of plastics litter our oceans. Every day, approximately 8 million 
                         pieces of plastic get into the oceans. Not to mention the air pollution results from burning plastic 
                         on land. Not to mention the amount of water required to recycle plastic. Climate change is an accrued
                          result of all kinds of pollution, including plastic but we are not without solutions. Founded by
                           alumni of IIT Kharagpur, AICMT’s concept is simple. What we take from nature 
                        should go back to nature – that’s our concept, motto, and inspiration: “From nature, to nature”.
                        </p>
                    </div>
                </ul>
            </div>
        </div>        
    </div>
  )
}

export default VisionMission