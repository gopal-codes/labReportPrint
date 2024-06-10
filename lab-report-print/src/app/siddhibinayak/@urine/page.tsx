import React from "react";
import ThreeColumnTable from "../../ReusableComponents/ThreeColumnTable";

export default function page() {

  var title = "URINE R/E & M/E";

  var people = [
    { firstname: 'Color:', lastname: 'Transarency' },
    { firstname: 'Albumin', lastname: 'Glucose' },
    { firstname: 'R.B.C', lastname: 'Pus Cells' },
    { firstname: 'Epithelial Cells', lastname: '/hpf' },
    { firstname: 'Casts:', lastname: '/hpf' },
    { firstname: 'Crystals:', lastname: '/hpf' },
    { firstname: 'Bacteria:', lastname: 'PH:' },
    { firstname: 'Bile Salts:', lastname: 'Bile Pigment' },
    { firstname: 'Urobillinogen:', lastname: '' },
    { firstname: 'Keton Bodies:', lastname: 'Other' },
];

  return (
    <>
      <div className="text-[14px] font-semibold text-white bg-[var(--primary-color)] w-full flex items-center justify-center">
        {title}{" "}
      </div>

      {people.map((data,ind) => (
       <div key={ind} className="flex border-2 border-t-0 border-[var(--primary-color)] text-center">
       <label htmlFor={data?.firstname.toString()} className="flex-1 flex items-center">
         <input className="size-4 mr-2 ml-1" type="checkbox" id={data?.firstname.toString()} />
         {data?.firstname}
         {data.firstname.charAt(data.firstname.length-1)==":" && 
         <input
           className="outline-none bg-transparent w-[45%] text-center"
           type="text"
         />}
       </label>

       {( data.lastname=="/hpf" || data.lastname == "") ? <label className="flex-1 flex justify-end">
       <input
          id={data?.lastname.toString()}
            className="outline-none bg-transparent flex-1 text-center"
            type="text"
          />
        {data.lastname}</label> : 
       <label htmlFor={data?.lastname.toString()} className="flex-1 flex items-center">
         <input className="size-4 mr-2 ml-1" type="checkbox" id={data?.lastname.toString()} />
         {data?.lastname}
         {data.lastname.charAt(data.lastname.length-1)==":" && 
         <input
           className="outline-none bg-transparent w-[45%] text-center"
           type="text"
         />}
       </label>}
     </div>
   ))}
 </>
  );
}
