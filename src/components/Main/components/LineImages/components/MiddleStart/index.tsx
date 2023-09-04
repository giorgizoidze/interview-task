import { useAppSelector } from "../../../../../../app/hooks";
import { findCheckedCompany } from "../../helper";

interface MiddleStartProps {
  side: "left" | "right";
}

export const MiddleStart: React.FC<MiddleStartProps> = ({ side }) => {
  const companies = useAppSelector((state) => state.business.companies);
  const level = useAppSelector((state) => state.business.level);
  const isChecked = findCheckedCompany(
    companies,
    level,
    side === "left" ? 2 : 5
  );

  return (
    <svg
      width="68"
      height="2"
      viewBox="0 0 68 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0V2H68V0H0Z" fill={isChecked ? "#9D71FD" : "#D7CFFD"} />
    </svg>
  );
};
