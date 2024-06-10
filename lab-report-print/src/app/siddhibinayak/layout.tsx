"use client";

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const layout = ({children, customerinfo, completebloodcount,serology,widaltest, stool, noheading,lipidprofile,liverfunctiontest, urine, others}:{children:React.ReactNode, customerinfo:React.ReactNode, completebloodcount:React.ReactNode, serology: React.ReactNode, widaltest:React.ReactNode, stool:React.ReactNode, noheading:React.ReactNode, lipidprofile:React.ReactNode, liverfunctiontest:React.ReactNode, urine: React.ReactNode, others:React.ReactNode}) => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "LabReport",
  });

  return (<>
    <div className="flex flex-col items-center" ref={componentRef} >
          {children}
          {customerinfo}
          <div className='flex justify-between w-full gap-x-10'>
            <div className='flex-1'>
              <h1 className='text-xl text-white bg-[var(--primary-color)] font-extrabold h-10 justify-center flex items-center'>HAEMATOLOGY</h1>
              <div className='flex border-2 border-[var(--primary-color)] mt-3'><div className='flex-1 text-center'> </div><div className='flex-1 text-center font-semibold text-sm'>RESULT</div><div className='flex-1 text-center font-semibold text-sm'>NORMAL VALUE</div></div>
              {completebloodcount}
              {serology}
              {widaltest}
              {stool}
            </div>
            <div className='flex-1'>
              <h1 className='leading-10 text-xl text-white bg-[var(--primary-color)] font-extrabold h-10 justify-center flex items-center'>BIO CHEMISTRY</h1>
              <div className='flex border-2 border-[var(--primary-color)] mt-3'><div className='flex-1 text-center'> </div><div className='flex-1 text-center font-semibold text-sm'>RESULT</div><div className='flex-1 text-center font-semibold text-sm'>NORMAL VALUE</div></div>
              {noheading}
              {lipidprofile}
              {liverfunctiontest}
              {urine}
              {others}
            </div>
          </div>
          <div className='w-full flex justify-end'>Signature: <div className='w-[150px]' ></div></div>
         </div>
         <button className='mt-4 bg-black text-white p-1 rounded mb-10' onClick={handlePrint}>Print Report</button>
         </>
  )
}

export default layout