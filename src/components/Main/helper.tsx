export enum businessLevel {
  small = "small",
  medium = "medium",
  enterprise = "enterprise",
}

export type CompanyType = {
  id: number;
  name: string;
  position: string;
  imgSrc: string;
  level: keyof typeof businessLevel;
}[];

export const companies: CompanyType = [
  {
    id: 1,
    name: "Sapling",
    imgSrc: "../../../public/sapling.PNG",
    position: "HR Managment",
    level: "medium",
  },
  {
    id: 2,
    name: "Workday",
    imgSrc: "../../../public/workday.png",
    position: "HR Managment",
    level: "medium",
  },
  {
    id: 3,
    name: "Xero",
    imgSrc: "../../../public/xero.png",
    position: "Employers Base",
    level: "enterprise",
  },
  {
    id: 4,
    name: "Rippling",
    imgSrc: "../../../public/rippling.jpg",
    position: "Salary Management",
    level: "enterprise",
  },
  {
    id: 5,
    name: "Expensify",
    imgSrc: "../../../public/expensify.jpg",
    position: "HR Managment",
    level: "enterprise",
  },
  {
    id: 6,
    name: "Zenefits",
    imgSrc: "../../../public/zenefits.png",
    position: "HR Managment",
    level: "small",
  },
];
