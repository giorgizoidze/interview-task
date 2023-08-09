import { Header } from "./components/Header";
import { Main } from "./components/Main";

export const App = () => {
  return (
    <div className="flex justify-center items-center xl:h-screen">
      <div className="w-full flex flex-col justify-between xl:gap-12 gap-5 items-center xl:px-wrapper px-6 xl:py-0 py-6">
        <Header />
        <Main />
      </div>
    </div>
  );
};
