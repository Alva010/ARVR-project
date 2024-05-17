

import Image1 from "../image/ar.png"
import Image2 from "../image/vr.png"

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import data from './data';
import datavr from "./datavr";
import { useRef } from 'react';


function AR () {
    return (
        <div className="w-full bg-fcol py-16 px-4" id="arvr">
            <h1 className="text-center font-bold text-[37px] text-headfont md:text-5xl sm:text-4xl">What is AR/VR?</h1>
            <div className="max-w-[1240p] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Image1} alt="" />
                <div className="flex flex-col justify-center">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-headfont">Augmented Reality</h1>
                    <p className="text-fontcol">
                        AR overlays digital elements onto the real world.
                        It uses sensors in devices to understand the user's surroundings.
                        AR has many uses, including entertainment, education, and practical applications.
                    </p>
                    <a href="https://readmore.pages.dev/" className=" bg-headfont w-[110px] rounded-md font-small text-white my-6 mx-auto md:mx-0 p-2 text-center">Read more</a>
                
                </div>
            </div>
            <SlideAR/>
            <VR/>
            <SlideVR/>

        </div>
    )
}


const VR = () => {
    return (
        <div className="w-full bg-fcol py-16 px-4" id="arvr">
            <div className="max-w-[1240p] mx-auto grid md:grid-cols-2">
            <img className="w-[500px] mx-auto my-4" src={Image2} alt="" />
                <div className="flex flex-col justify-center">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-headfont">Virtual Reality</h1>
                    <p className="text-fontcol">
                        VR creates a fully immersive computer-generated experience.
                        VR uses headsets and other equipment to block out the real world and place users in a virtual one.
                        VR has applications in many fields, including entertainment, retail, and automotive design.
                    </p>
                      <a href="https://read-more.pages.dev/" className=" bg-headfont w-[110px] rounded-md font-small text-white my-6 mx-auto md:mx-0 p-2 text-center">Read more</a>
                </div>
                
            </div>
        </div>
    )
}



const SlideAR = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  return (
    <div className='relative flex items-center bg-white pb-5'>
      <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
      <div
        ref={sliderRef}
        className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'
      >
        {data.map((item) => (
          <img
            key={item.id} // Assuming `item` has a unique `id` property
            className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
            src={item.img}
            alt={item.alt || 'image'} // Provide a meaningful alt text
          />
        ))}
      </div>
      <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
    </div>
  );
};

const SlideVR = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  return (
    <div className='relative flex items-center bg-white pb-5'>
      <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
      <div
        ref={sliderRef}
        className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'
      >
        {datavr.map((item) => (
          <img
            key={item.id} // Assuming `item` has a unique `id` property
            className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
            src={item.img}
            alt={item.alt || 'image'} // Provide a meaningful alt text
          />
        ))}
      </div>
      <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
    </div>
  );
};





export default AR;