import React from "react";
import ThreeColumnTable from "../../ReusableComponents/ThreeColumnTable";

export default function page() {

  var title = "SEROLOGY";

  var people = [
    { firstname: 'Malaria Parasite', lastname: '' },
    { firstname: 'Reticulocyle Count', lastname: '0.2-2%' },
    { firstname: 'CRP', lastname: '' },
    { firstname: 'ASO Tire', lastname: '(P.V/P.F)' },
    { firstname: 'HCV', lastname: '(IGG/IGM)' },
    { firstname: 'Elisa for TB', lastname: '' },
    { firstname: 'HIV/RETRO TEST', lastname: '' },
    { firstname: 'HBSAg', lastname: '' },
    { firstname: 'VDRL/TPA/RPR/TPL', lastname: '' },
];

  return (
    <>
      <ThreeColumnTable title={title} data={people} />
    </>
  );
}
