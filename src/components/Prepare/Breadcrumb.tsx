import { useBreadcrumbPath } from "@/hooks/userBreadcrumbPath";
import { Breadcrumb as AntBreadCrumb } from "antd";
import React from "react";

const Breadcrumb = () => {
  const paths = useBreadcrumbPath();
  return (
    <AntBreadCrumb style={{ margin: "16px 0" }}>
      {paths.map((path) => (
        <AntBreadCrumb.Item key={path}>{path}</AntBreadCrumb.Item>
      ))}
    </AntBreadCrumb>
  );
};

export default Breadcrumb;
