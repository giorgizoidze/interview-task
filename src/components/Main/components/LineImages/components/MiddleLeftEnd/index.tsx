import { useAppSelector } from "../../../../../../app/hooks";
import { findCheckedCompany } from "../../helper";

export const MiddleLeftEnd = () => {
  const companies = useAppSelector((state) => state.business.companies);
  const level = useAppSelector((state) => state.business.level);

  const isTopLeftChecked = findCheckedCompany(companies, level, 1);
  const isMiddleLeftChecked = findCheckedCompany(companies, level, 2);
  const isBottomLeftChecked = findCheckedCompany(companies, level, 3);
  const isTopAndBottomLeftChecked =
    findCheckedCompany(companies, level, 1) &&
    findCheckedCompany(companies, level, 3);

  return (
    <svg
      width="52"
      height="2"
      viewBox="0 0 52 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isMiddleLeftChecked ? (
        <path d="M52.0005 0H0V2H52.0005V0Z" fill="#9D71FD" />
      ) : isTopAndBottomLeftChecked ? (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M52.0005 0H0V2H52.0005V0Z"
            fill="#9D71FD"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.0114365 2H8.00098V0H0.0114365C0.729833 0.385241 1.47926 0.720144 2.25499 0.999999C1.47926 1.27985 0.729833 1.61476 0.0114365 2ZM8.00098 0H0.000976562V2H8.00098V0Z"
            fill="#D7CFFD"
          />
        </>
      ) : isTopLeftChecked ? (
        <>
          <path d="M52.0005 0H0V2H52.0005V0Z" fill="#D7CFFD" />
          <path
            d="M8.00029 2H52.0008V0H0.0107443C2.39059 1.27619 5.11091 2 8.00029 2Z"
            fill="#9D71FD"
          />
        </>
      ) : isBottomLeftChecked ? (
        <>
          <path d="M52.0005 2H0V0H52.0005V2Z" fill="#D7CFFD" />
          <path
            d="M8.00029 0H52.0008V2H0.0107422C2.39058 0.723809 5.11091 0 8.00029 0Z"
            fill="#9D71FD"
          />
        </>
      ) : (
        <path d="M0 0V2H68V0H0Z" fill="#D7CFFD" />
      )}
    </svg>
  );
};
