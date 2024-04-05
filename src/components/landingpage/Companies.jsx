import React from "react";
import { styles } from "../../styles/styles";
import { Company } from "../../assets/export";

const Companies = () => {
  return (
    <div className={`w-full h-auto  flex justify-center items-start `}>
      <img src={Company} />
    </div>
  );
};

export default Companies;
