import { useRouter } from "next/router";

export const useRouterPath = () => {
  const router = useRouter();
  return router.pathname;
};
