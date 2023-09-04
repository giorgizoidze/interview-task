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
  level: keyof typeof businessLevel | "";
  isChecked: boolean;
}[];

export type UpdateCompanyPayload = {
  name: string;
  isChecked: boolean;
};
