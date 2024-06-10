import Image from "next/image";
import React from "react";

import microscopephoto from "../favicon.ico";

const page = () => {
  return (
    <>
      <h1
        className="text-[40px] font-extrabold mt-8"
        style={{ fontFamily: "Abril Fatface" }}
      >
        JAI SHREE SIDDHI BINAYAK POLYCLINIC PVT. LTD.
      </h1>
      <div className=" w-full flex justify-between items-center my-[-6px]">
        <div className="ml-8"><Image src={microscopephoto} width={80} height={80} alt="shiddhibinayak microscope" /></div>
      <div className="flex flex-col items-center">
      <h2 className="text-[25px] font-semibold">
        Ishworpur-7, Bayalbas,Sarlahi
      </h2>
      <div
        className="border-[var(--primary-color)] border-[2px] px-2 text-[25px] font-semibold w-fit"
        style={{ fontFamily: "vollkorn" }}
      >
        Lab Report
      </div></div>
      <div className="font-bold text-[18px] text-center border-[2px] rounded-md border-[var(--primary-color)] p-1 mr-8"> 
        <div>Shrawan Dhami</div>
        <div>B-8303 MLT</div>  
      </div>
      </div>
    </>
  );
};

export default page;
