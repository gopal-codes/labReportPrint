
import React from "react";

type tabledata = {
  title?: string;
  data: object[];
};

const ThreeColumnTable = async (props: tabledata) => {
  return (
    <>
      <div className="text-[14px] font-semibold text-white bg-[var(--primary-color)] w-full flex items-center justify-center">
        {props.title || "_"}{" "}
      </div>

      {props.data?.map((data,ind) => (
        <div key={ind} className="flex border-2 border-t-0 border-[var(--primary-color)] text-center">
          <label htmlFor={data?.firstname.toString()} className="flex-1 flex items-center">
            <input className="size-4 mr-2 ml-1" type="checkbox" />
            {data?.firstname}
          </label>
          <input
          id={data?.firstname.toString()}
            className="outline-none bg-transparent flex-1 border-l-2 border-r-2 border-[var(--primary-color)] text-center"
            type="text"
          />
          <div className="flex-1"> {data?.lastname}</div>
        </div>
      ))}
    </>
  );
};

export default ThreeColumnTable;
