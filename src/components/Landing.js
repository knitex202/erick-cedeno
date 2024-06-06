import React from "react";
import instagram from "../assets/instagram.png";
import Card from "../components/Card";
import { data } from "../data";

function Landing() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col w-full lg:flex lg:flex-row lg:justify-center mt-8 items-center">
        <div>
          <h1 className=" inline-block text-6xl ">
            Erick <span className="text-5xl font-thin">Cedeño</span>
          </h1>
        </div>
        <div className="relative top-1 ml-6">
          <a href="https://www.instagram.com/mr.erickcedeno/" target="blank">
            <img className="h-16 w-16 " src={instagram} />
          </a>
        </div>
      </div>
      <div className=" my-8 flex w-full">
        <div className="flex w-full relative overflow-x-scroll">
          <Card info={data} />
        </div>
      </div>
      <div className="flex flex-row w-2/3 self-center ">
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full text-xs lg:text-lg text-gray-600">
          <div>
            <p>
              HEIGHT:{" "}
              <span className="font-bold text-black">5'10" / 178 cm</span>
            </p>
            <p>
              COAT: <span className="font-bold text-black">40 Regular</span>
            </p>
          </div>
          <div>
            <p>
              NECK: <span className="font-bold text-black">15½</span>{" "}
            </p>
            <p>
              SHOE: <span className="font-bold text-black">10½</span>
            </p>
          </div>
          <div>
            <p>
              SLEEVE: <span className="font-bold text-black">33</span>{" "}
            </p>
            <p>
              HAIR: <span className="font-bold text-black">Grey</span>
            </p>
          </div>
          <div>
            <p>
              WAIST/INSEAM:{" "}
              <span className="font-bold text-black">32 / 30</span>{" "}
            </p>
            <p>
              EYES: <span className="font-bold text-black">Brown</span>{" "}
            </p>
          </div>
          <br/>
        </div>
      </div>
    </div>
  );
}

export default Landing;
