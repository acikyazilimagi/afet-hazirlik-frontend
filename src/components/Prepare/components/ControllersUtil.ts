import { message, Steps } from "antd";
import { NextRouter } from "next/router";

const gotoNextSection = (
  navData: any[],
  pathname: string,
  router: NextRouter
) => {
  message.success("Bölüm tamamlandı!");
  const urlFirstPart = pathname.split("/")[1];
  const selectedNavItems = navData.find((item) =>
    item.href.startsWith(`/${urlFirstPart}`)
  );
  const currentIndex = getSubMenuIndex(navData, pathname);
  const nextUrl = selectedNavItems?.data[currentIndex! + 1]?.href;
  if (nextUrl) {
    router.push(nextUrl!);
  } else {
    const currentFirstPartIndex = navData.findIndex((item) =>
      item.href.startsWith(`/${urlFirstPart}`)
    );
    const nextPart = navData[currentFirstPartIndex + 1];
    if (nextPart) {
      router.push(nextPart.data[0].href);
    } else {
      router.push("/");
    }
  }
};

export const getCurrentMenuIndex = (navData: any[], pathname: string) => {
  const urlFirstPart = pathname.split("/")[1];
  const index = navData.findIndex((item) =>
    item.href.startsWith(`/${urlFirstPart}`)
  );
  return index;
};

export const getSubMenuIndex = (navData: any[], pathname: string) => {
  const urlFirstPart = pathname.split("/")[1];
  const selectedNavItems = navData.find((item: { href: string }) =>
    item.href.startsWith(`/${urlFirstPart}`)
  );
  const currentIndex = selectedNavItems?.data.findIndex(
    (item: { href: string }) => item.href === pathname
  );
  return currentIndex;
};

export default gotoNextSection;
