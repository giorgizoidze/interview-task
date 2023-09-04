import { useAppSelector } from "../../../../../../app/hooks";
import { findCheckedCompany } from "../../helper";

export const BottomRight = () => {
  const companies = useAppSelector((state) => state.business.companies);
  const level = useAppSelector((state) => state.business.level);
  const isChecked = findCheckedCompany(companies, level, 6);

  return (
    <svg
      width="76"
      height="100"
      viewBox="0 0 76 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M76 98H32C23.7157 98 17 91.2843 17 83V14.9141C17 8.46191 13.2983 2.85122 7.98488 0H0C8.23544 0 15 6.67861 15 14.9141V83C15 92.3888 22.6112 100 32 100H76V98Z"
        fill={isChecked ? "#9D71FD" : "#D7CFFD"}
      />
    </svg>
  );
};
