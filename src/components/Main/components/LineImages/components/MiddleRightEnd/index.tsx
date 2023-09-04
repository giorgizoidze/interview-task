import { useAppSelector } from "../../../../../../app/hooks";
import { findCheckedCompany } from "../../helper";

export const MiddleRightEnd = () => {
  const companies = useAppSelector((state) => state.business.companies);
  const level = useAppSelector((state) => state.business.level);

  const isTopRightChecked = findCheckedCompany(companies, level, 4);
  const isMiddleRightChecked = findCheckedCompany(companies, level, 5);
  const isBottomRightChecked = findCheckedCompany(companies, level, 6);
  const isTopAndBottomRightChecked =
    findCheckedCompany(companies, level, 4) &&
    findCheckedCompany(companies, level, 6);

  return (
    <svg
      width="52"
      height="2"
      viewBox="0 0 52 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isMiddleRightChecked ? (
        <path d="M52.0005 0H0V2H52.0005V0Z" fill="#9D71FD" />
      ) : isTopAndBottomRightChecked ? (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.000469208 0H52.001V2H0.000469208V0Z"
            fill="#9D71FD"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.9895 2H44V0H51.9895C51.2711 0.385241 50.5217 0.720144 49.746 0.999999C50.5217 1.27985 51.2711 1.61476 51.9895 2ZM44 0H52V2H44V0Z"
            fill="#D7CFFD"
          />
        </>
      ) : isTopRightChecked ? (
        <>
          <path d="M0.000469208 0H52.001V2H0.000469208V0Z" fill="#D7CFFD" />
          <path
            d="M44.0007 2H0.000179291V0H51.9902C49.6104 1.27619 46.8901 2 44.0007 2Z"
            fill="#9D71FD"
          />
        </>
      ) : isBottomRightChecked ? (
        <>
          <path d="M0.000469208 2H52.001V0H0.000469208V2Z" fill="#D7CFFD" />
          <path
            d="M44.0007 0H0.000179291V2H51.9902C49.6104 0.723809 46.8901 0 44.0007 0Z"
            fill="#9D71FD"
          />
        </>
      ) : (
        <path d="M0 0V2H68V0H0Z" fill="#D7CFFD" />
      )}
    </svg>
  );
};
