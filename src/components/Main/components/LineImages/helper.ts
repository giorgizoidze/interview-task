import { CompanyType, businessLevel } from "../../helper";

export const findCheckedCompany = (
  companies: CompanyType,
  level: keyof typeof businessLevel | "",
  id: number
) => companies.find((c) => c.id === id && c.level === level)?.isChecked;
