import { memo } from "react";

export const FlowNode = memo(() => {
  return (
    <div className="xl:w-96 w-full xl:h-flowNode xl:self-end rounded-3xl border-2 bg-light border-purple flex flex-col items-center xl:pb-11 pb-6 xl:px-10 px-3 text-center justify-between xl:order-2 order-1">
      <div className="flex flex-col items-center">
        <img
          className="h-portraitImage w-portraitImage -translate-y-1/2 rounded-xl bg-contain"
          src="../../../../../public/woman.jpg"
        />
        <span className="font-bold text-xl text-primary xl:-mt-4 -mt-8">
          Lauren Robson
        </span>
        <span className="text-secondary text-sm font-normal mt-1.5 xl:mb-0 mb-2">
          HR Director
        </span>
      </div>
      <span className="text-primary text-base font-normal">
        “I want to lower PTO liability and keep my employess happy. I want to
        lower PTO liability.”
      </span>
    </div>
  );
});
