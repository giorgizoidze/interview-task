import { Bottom } from "./components/Bottom";
import { MiddleLeftEnd } from "./components/MiddleLeftEnd";
import { MiddleRightEnd } from "./components/MiddleRightEnd";
import { MiddleStart } from "./components/MiddleStart";
import { Top } from "./components/Top";

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
        {side === "left" ? <Top side="left" /> : <Top side="right" />}
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
        {side === "left" ? <Bottom side="left" /> : <Bottom side="right" />}
      </div>
    </div>
  );
};
