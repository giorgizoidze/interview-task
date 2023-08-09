export const Header = () => {
  return (
    <div className="xl:w-header xl:h-headerDesktop h-auto flex flex-col text-center justify-between gap-2.5">
      <h1 className="font-bold xl:text-heading text-4xl xl:leading-headingDesktop leading-headingMobile text-primary">
        Easy Turn-Key Integration
      </h1>
      <p className="text-secondary xl:text-xl text-base leading-paragraph">
        Increase job satisfaction, improve engagement, decrease burnout and
        lower payroll liability by reimagining what employees can do with their
        PTO.
      </p>
    </div>
  );
};
