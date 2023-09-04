import { Switch } from "antd";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { updateCompanyBusinessLevel } from "../../../../features/business/businessLevelSlice";

interface CompanyProps {
  name: string;
  position: string;
  imgSrc: string;
}

export const Company: React.FC<CompanyProps> = ({ name, position, imgSrc }) => {
  const dispatch = useAppDispatch();
  const level = useAppSelector((state) => state.business.level);
  const companies = useAppSelector((state) => state.business.companies);

  const isCompanyChecked = companies.some(
    (c) => c.name === name && c.level === level
  );

  const handleChange = (isChecked: boolean, name: string) => {
    dispatch(
      updateCompanyBusinessLevel({
        name,
        isChecked,
      })
    );
  };

  return (
    <div
      className={`h-20 xl:w-company w-full rounded-xl pl-4 pr-5 border-2 py-4 order-1 ${
        isCompanyChecked ? "border-purple" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img className="h-12 w-12 rounded-xl" src={imgSrc} />
          <div className="flex flex-col justify-between h-10">
            <span className="text-primary text-base font-medium">{name}</span>
            <span className="text-secondary text-xs font-normal">
              {position}
            </span>
          </div>
        </div>
        <Switch
          size="small"
          onChange={(checked) => handleChange(checked, name)}
          checked={isCompanyChecked}
        />
      </div>
    </div>
  );
};
