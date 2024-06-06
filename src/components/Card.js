import React from "react";
import erick from "../assets/erickMug.png";
import erickSnow from "../assets/erickSnow.jpg";

function Card({info}) {
    const cards = info.map((img) => {
       return( 
        <div className="flex-shrink-0 h-[900px] ">
            <img className="h-full w-full" src={img.image} alt="" /> 
        </div>
       )
    })
  return (
    <>
        {cards}
    </>
  );
}

export default Card;
