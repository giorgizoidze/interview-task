import { useAppSelector } from "../../../../../../app/hooks";
import { findCheckedCompany } from "../../helper";

interface TopProps {
  side: "left" | "right";
}

export const Top: React.FC<TopProps> = ({ side }) => {
  const companies = useAppSelector((state) => state.business.companies);
  const level = useAppSelector((state) => state.business.level);
  const isChecked = findCheckedCompany(
    companies,
    level,
    side === "left" ? 1 : 4
  );

  return (
    <svg
      width="76"
      height="100"
      viewBox="0 0 76 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {side === "left" ? (
        <path
          d="M0 2H44C52.2843 2 59 8.71573 59 17V85.0859C59 91.5381 62.7017 97.1488 68.0151 100H76C67.7646 100 61 93.3214 61 85.0859V17C61 7.61116 53.3888 0 44 0H0V2Z"
          fill={isChecked ? "#9D71FD" : "#D7CFFD"}
        />
      ) : (
        <path
          d="M76 2H32C23.7157 2 17 8.71573 17 17V85.0859C17 91.5381 13.2983 97.1488 7.98488 100H0C8.23544 100 15 93.3214 15 85.0859V17C15 7.61116 22.6112 0 32 0H76V2Z"
          fill={isChecked ? "#9D71FD" : "#D7CFFD"}
        />
      )}
    </svg>
  );
};
