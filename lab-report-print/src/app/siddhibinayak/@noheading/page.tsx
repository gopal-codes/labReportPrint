import React from "react";
import ThreeColumnTable from "../../ReusableComponents/ThreeColumnTable";

export default function page() {

  var title = "";

  var people = [
    { firstname: 'B. Sugar(Fasting)', lastname: '60-110 mg/dl' },
    { firstname: 'B. Sugar (PP)', lastname: '<70-140 mg/dl' },
    { firstname: 'B. Sugar (Random)', lastname: '<70-140 mg/dl' },
    { firstname: 'B. Urea', lastname: '15-45 mg/dl' },
    { firstname: 'B. Ceratinine', lastname: '0.8-1.2 mg/dl' },
    { firstname: 'B. Electrolitc', lastname: '' },
    { firstname: 'B. Uric Acid', lastname: '2.5-7.0 mg/dl' },
    { firstname: 'B. Sodium Na+', lastname: '135-145 mE/ql' },
    { firstname: 'B. Potassium K+', lastname: '2.5-5.5 mE/ql' },
    { firstname: 'B. Calcium Ca+', lastname: '8.5-10.5 mE/ql' },
];

  return (
    <>
      <ThreeColumnTable title={title} data={people} />
    </>
  );
}
