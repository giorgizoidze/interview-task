import { BusinessCategoryPicker } from "./components/BusinessCategoryPicker";
import { Company } from "./components/Company";
import { FlowNode } from "./components/FlowNode";
import { useAppSelector } from "../../app/hooks";
import { LineImages } from "./components/LineImages";

import "./index.css";

export const Main = () => {
  const companies = useAppSelector((state) => state.business.companies);

  return (
    <div className="flex flex-col xl:gap-20 gap-16 w-full">
      <BusinessCategoryPicker />
      <div className="w-full xl:h-integrationflow h-auto">
        <div className="flex xl:flex-row flex-col xl:items-center xl:justify-center xl:h-full xl:gap-0 gap-2.5">
          <div className="company-column xl:order-1 order-2">
            {companies.slice(0, 3).map((val) => (
              <Company
                key={val.id}
                name={val.name}
                position={val.position}
                imgSrc={val.imgSrc}
              />
            ))}
          </div>
          <LineImages side="left" />
          <FlowNode />
          <LineImages side="right" />
          <div className="company-column order-3">
            {companies.slice(3).map((val) => (
              <Company
                key={val.id}
                name={val.name}
                position={val.position}
                imgSrc={val.imgSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
