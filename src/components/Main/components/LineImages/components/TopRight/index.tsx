import { useAppSelector } from "../../../../../../app/hooks";
import { findCheckedCompany } from "../../helper";

export const TopRight = () => {
  const companies = useAppSelector((state) => state.business.companies);
  const level = useAppSelector((state) => state.business.level);
  const isChecked = findCheckedCompany(companies, level, 4);

  return (
    <svg
      width="76"
      height="100"
      viewBox="0 0 76 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M76 2H32C23.7157 2 17 8.71573 17 17V85.0859C17 91.5381 13.2983 97.1488 7.98488 100H0C8.23544 100 15 93.3214 15 85.0859V17C15 7.61116 22.6112 0 32 0H76V2Z"
        fill={isChecked ? "#9D71FD" : "#D7CFFD"}
      />
    </svg>
  );
};
