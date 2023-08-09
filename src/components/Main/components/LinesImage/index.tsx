import { useAppSelector } from "../../../../app/hooks";
import { businessLevel } from "../../helper";

interface LinesImageProps {
  type: keyof typeof businessLevel;
  imageName: string;
}

export const LinesImage: React.FC<LinesImageProps> = ({ type, imageName }) => {
  const level = useAppSelector((state) => state.business.level);

  return (
    <img
      className={`order-2 hidden  ${
        level === businessLevel[type] ? "xl:block" : "xl:hidden"
      }`}
      src={`../../../public/${imageName}.svg`}
    />
  );
};
