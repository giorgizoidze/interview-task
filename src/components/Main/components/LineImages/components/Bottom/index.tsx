import { useAppSelector } from "../../../../../../app/hooks";
import { findCheckedCompany } from "../../helper";

interface BottomProps {
  side: "left" | "right";
}

export const Bottom: React.FC<BottomProps> = ({ side }) => {
  const companies = useAppSelector((state) => state.business.companies);
  const level = useAppSelector((state) => state.business.level);
  const isChecked = findCheckedCompany(
    companies,
    level,
    side === "left" ? 3 : 6
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
          d="M0 98H44C52.2843 98 59 91.2843 59 83V14.9141C59 8.46191 62.7017 2.85122 68.0151 0H76C67.7646 0 61 6.67861 61 14.9141V83C61 92.3888 53.3888 100 44 100H0V98Z"
          fill={isChecked ? "#9D71FD" : "#D7CFFD"}
        />
      ) : (
        <path
          d="M76 98H32C23.7157 98 17 91.2843 17 83V14.9141C17 8.46191 13.2983 2.85122 7.98488 0H0C8.23544 0 15 6.67861 15 14.9141V83C15 92.3888 22.6112 100 32 100H76V98Z"
          fill={isChecked ? "#9D71FD" : "#D7CFFD"}
        />
      )}
    </svg>
  );
};
