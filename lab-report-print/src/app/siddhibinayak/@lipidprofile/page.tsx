import React from "react";
import ThreeColumnTable from "../../ReusableComponents/ThreeColumnTable";

export default function page() {

  var title = "LIPID PROFILE";

  var people = [
    { firstname: 'S. Cholestrol', lastname: '<200 mg/dl' },
    { firstname: 'HDL', lastname: '30-70 mg/dl' },
    { firstname: 'LDL', lastname: '<130 mg/dl' },
    { firstname: 'VLDL', lastname: '5-35 mg/dl' },
    { firstname: 'S. Triglycerid (TAG)', lastname: '70-150 mg/dl' },
];

  return (
    <>
      <ThreeColumnTable title={title} data={people} />
    </>
  );
}
