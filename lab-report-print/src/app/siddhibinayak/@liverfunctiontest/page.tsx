import React from "react";
import ThreeColumnTable from "../../ReusableComponents/ThreeColumnTable";

export default function page() {

  var title = "LIVER FUNCTION TEST";

  var people = [
    { firstname: 'S. Billirubin (T)', lastname: '0.2-1.0 mg/dl' },
    { firstname: 'S. Billirubin (D)', lastname: 'up to 0.6 mg/dl' },
    { firstname: 'S. Billirubin (ind)', lastname: '' },
    { firstname: 'T. Protein', lastname: '6-8.0 mg/dl' },
    { firstname: 'S. Albumin', lastname: '3.5-4.7 mg/dl' },
    { firstname: 'SGOT (AST)', lastname: 'up to 40 IU/' },
    { firstname: 'SGPT (ALT)', lastname: 'up to 38 IU/IL' },
    { firstname: 'ALP', lastname: 'up to 306 IU/IL' },
    { firstname: 'S. Amylase', lastname: '22-80 IU/L' },
];

  return (
    <>
      <ThreeColumnTable title={title} data={people} />
    </>
  );
}
