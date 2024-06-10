import React from "react";
import ThreeColumnTable from "../../ReusableComponents/ThreeColumnTable";

export default function page() {

  var title = "WIDAL TEST";

  var people = [
    { firstname: 'S. Typhi. O', lastname: '<1:80' },
    { firstname: 'S. Typhi. H', lastname: '<1:80' },
    { firstname: 'S. Para typhi A(H)', lastname: '<1:80' },
    { firstname: 'S. para typhi B(H)', lastname: '<1:80' },
];

  return (
    <>
      <ThreeColumnTable title={title} data={people} />
    </>
  );
}
