import React from "react";
import erick from "../assets/erickMug.png";
import erickSnow from "../assets/erickSnow.jpg";

function Card({info}) {
    const cards = info.map((img) => {
       return( 
       <div>
        <div className="h-[800px] w-full bg-gray-600 overflow-hidden">
            <img className="h-full w-full object-cover" src={img.image} alt="" /> 
        </div>
        </div>
       )
    })
  return (
    <div className="flex">
        {cards}
    </div>
  );
}

export default Card;
