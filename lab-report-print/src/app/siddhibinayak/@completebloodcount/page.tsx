import React from "react";
import ThreeColumnTable from "../../ReusableComponents/ThreeColumnTable";

export default function page() {

  var title = "COMPLETE BLOOD COUNT";

  var people = [
    { firstname: 'HB', lastname: '(M13-18)gm%' },
    { firstname: '', lastname: '(F11-16) gm%' },
    { firstname: 'WBC', lastname: '4000-11000/cumm' },
    { firstname: 'DLC', lastname: '' },
    { firstname: 'Neutrophils', lastname: '40-70%' },
    { firstname: 'Lymphocytes', lastname: '20-40%' },
    { firstname: 'Eosinophils', lastname: '1-5%' },
    { firstname: 'Monocytes', lastname: '2-8%' },
    { firstname: 'Basophils', lastname: '0-1%' },
    { firstname: 'ESR', lastname: 'f:0-20, M 0-10mm/hr' },
    { firstname: 'RBC', lastname: '4-6 mill/cu/mm' },
    { firstname: 'Platelets', lastname: '1.5-4 lakh' },
    { firstname: 'PCV', lastname: '36-54%' },
    { firstname: 'MCHC', lastname: '33-34%' },
    { firstname: 'MVC', lastname: '76-92f1' },
    { firstname: 'BT', lastname: '1-5 Minutes' },
    { firstname: 'CT', lastname: '5-10 Minutes' },
];

  return (
    <>
      <ThreeColumnTable title={title} data={people} />
    </>
  );
}
