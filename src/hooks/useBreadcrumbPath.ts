import { useRouterPath } from "./useRouterPath";
import { toPascaleCase } from "@/utils/pascalCase";

export const useBreadcrumbPath = () => {
  const route = useRouterPath();
  const removeQuestionMark = route.split("?")[0];
  const removeEquals = removeQuestionMark.split("=")[0];
  const pathToPascalCase = toPascaleCase(removeEquals);
  return pathToPascalCase.split("/");
};
