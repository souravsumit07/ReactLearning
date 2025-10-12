import React from "react";
import { MoveUpRight } from "lucide-react";

const Main = ({data}) => {
  return (
    <div className="flex gap-20 justify-center mt-10 items-start">
      {/* Left Content */}
      <div className="w-1/4 p-3">
        <h1 className="font-bold text-5xl leading-tight">
          Prospective <br />
          <span className="text-gray-500">customer</span> <br />
          segmentation
        </h1>

        <p className="text-sm py-3 font-medium mt-2 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi
          excepturi rem voluptates quo quibusdam ducimus voluptate ea saepe
          perspiciatis facere minima ipsam quae illum commodi tempore
          voluptatibus vel deserunt!
        </p>

        <button className="mt-5 flex items-center gap-2 text-lg font-semibold hover:text-gray-500 transition-all">
          Explore <MoveUpRight className="w-5 h-5" />
        </button>
      </div>  

      {/* Right Image Section */}
      <div className="flex gap-10  flex-nowrap overflow-x-auto scrollbar">
        {/* Card 1 */}
       {data.map((element,idx) => {
         return <div className="relative w-80 s flex-shrink-0">
          <img
            className="rounded-2xl shadow-lg object-cover h-[400px] w-full"
            src={element.image}
          />

          {/* Top Number */}
          <div className="absolute top-3 left-3">
            <h1 className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center font-semibold">
              {idx+1}
            </h1>
          </div>

          {/* Bottom Text */}
          <div className="absolute bottom-3 left-3">
            <p className="text-white font-bold shadow-md">
           {element.title}
            </p>
            <button  style={{backgroundColor:element.color,}} className="px-5 py-1 text-white font-bold rounded-full mt-2 ">
              {element.buttonText}
            </button>
          </div>
        </div>
        
       })}

        
      </div>
    </div>
  );
};

export default Main;
