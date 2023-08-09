import { Switch } from "antd";

interface CompanyProps {
  name: string;
  position: string;
  imgSrc: string;
  isChecked: boolean;
}

export const Company: React.FC<CompanyProps> = ({
  name,
  position,
  imgSrc,
  isChecked,
}) => {
  return (
    <div
      className={`h-20 xl:w-company w-full rounded-xl pl-4 pr-5 border-2 py-4 order-1 ${
        isChecked ? "border-purple" : ""
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
        <Switch checked={isChecked} size="small" disabled />
      </div>
    </div>
  );
};
