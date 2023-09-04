import { BottomLeft } from "./components/BottomLeft";
import { BottomRight } from "./components/BottomRight";
import { MiddleLeftEnd } from "./components/MiddleLeftEnd";
import { MiddleRightEnd } from "./components/MiddleRightEnd";
import { MiddleStart } from "./components/MiddleStart";
import { TopLeft } from "./components/TopLeft";
import { TopRight } from "./components/TopRight";

interface LineImagesProps {
  side: "left" | "right";
}

export const LineImages: React.FC<LineImagesProps> = ({ side }) => {
  return (
    <div className="w-lines h-lines order-2 hidden xl:flex flex-col">
      <div
        className={`h-topLine w-full flex ${
          side === "right" ? "justify-end" : ""
        }`}
      >
        {side === "left" ? <TopLeft /> : <TopRight />}
      </div>
      <div className="flex">
        {side === "left" ? (
          <>
            <MiddleStart side="left" />
            <MiddleLeftEnd />
          </>
        ) : (
          <>
            <MiddleRightEnd />
            <MiddleStart side="right" />
          </>
        )}
      </div>
      <div
        className={`h-topLine w-full flex ${
          side === "right" ? "justify-end" : ""
        }`}
      >
        {side === "left" ? <BottomLeft /> : <BottomRight />}
      </div>
    </div>
  );
};
