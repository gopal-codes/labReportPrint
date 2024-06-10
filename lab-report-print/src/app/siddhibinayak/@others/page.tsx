import React from "react";
import ThreeColumnTable from "../../ReusableComponents/ThreeColumnTable";

export default function page() {

  var title = "OTHERS";

  var people = [
    { name: 'Pregnancy Test(hcg)' },
    { name: 'H. Pylori Test' },
    { name: 'Blood Group Rh Type' },
];

  return (
    <div>
      <div className="text-[14px] font-semibold text-white bg-[var(--primary-color)] w-full flex items-center justify-center">
        {title}{" "}
      </div>

      {people.map((data,ind) => (
        <div key={ind} className="flex border-2 border-t-0 border-[var(--primary-color)] text-center">
           <label htmlFor={data?.name.toString()} className="flex-1 flex items-center">
            <input className="size-4 mr-2 ml-1" type="checkbox" />
            {data?.name}
          </label>
          <input
          id={data?.name.toString()}
            className="outline-none bg-transparent flex-1 text-center"
            type="text"
          />
        </div>
      ))}
    </div>
  );
}
