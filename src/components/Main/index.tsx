import { useAppSelector } from "../../app/hooks";
import { BusinessCategoryPicker } from "./components/BusinessCategoryPicker";
import { Company } from "./components/Company";
import { LinesImage } from "./components/LinesImage";
import { FlowNode } from "./components/FlowNode";
import { companies } from "./helper";

import "./index.css";

export const Main = () => {
  const level = useAppSelector((state) => state.business.level);

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
                isChecked={level === val.level}
              />
            ))}
          </div>
          <LinesImage type="small" imageName="emptyLeft" />
          <LinesImage type="medium" imageName="medium" />
          <LinesImage type="enterprise" imageName="enterpriseLeft" />
          <FlowNode />
          <LinesImage type="small" imageName="small" />
          <LinesImage type="medium" imageName="emptyright" />
          <LinesImage type="enterprise" imageName="enterpriseRight" />
          <div className="company-column order-3">
            {companies.slice(3).map((val) => (
              <Company
                key={val.id}
                name={val.name}
                position={val.position}
                imgSrc={val.imgSrc}
                isChecked={level === val.level}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
