import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { changeBusinessLevel } from "../../../../features/business/businessLevelSlice";
import { businessLevel } from "../../helper";

export const BusinessCategoryPicker = () => {
  const level = useAppSelector((state) => state.business.level);
  const dispatch = useAppDispatch();

  const isSmallActive = level === businessLevel.small;
  const isMediumActive = level === businessLevel.medium;
  const isEnterpriseActive = level === businessLevel.enterprise;

  const handleButtonClick = (value: keyof typeof businessLevel) => {
    dispatch(changeBusinessLevel(value));
  };

  return (
    <div className="business-category-picker-wrapper">
      <div className="bigMobile:w-full mobile:w-businessCategoryPicker  flex justify-center xl:gap-2 xl:border-none border-b">
        <button
          className={`btn ${isSmallActive ? "btn-active" : ""}`}
          onClick={() => handleButtonClick(businessLevel.small)}
        >
          Small Business
        </button>
        <button
          className={`btn ${isMediumActive ? "btn-active" : ""}`}
          onClick={() => handleButtonClick(businessLevel.medium)}
        >
          Medium Business
        </button>
        <button
          className={`btn ${isEnterpriseActive ? "btn-active" : ""}`}
          onClick={() => handleButtonClick(businessLevel.enterprise)}
        >
          Enterprise
        </button>
      </div>
    </div>
  );
};
