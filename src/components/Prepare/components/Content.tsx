import { StepsContext } from "@/context/StepsContext";
import React, { useContext } from "react";
import { Typography } from "antd";
import ReactPlayer from "react-player";
import Image from "next/image";
import ReactHtmlParser from "react-html-parser";

const { Title, Paragraph } = Typography;

const Content = () => {
  const { steps, current } = useContext(StepsContext);
  const step = steps[current];
  const isVideo = step.type === "video";
  const isText = step.type === "text";
  const isImage = step.type === "image";
  const isHtml = step.type === "html";

  const contentStyle: React.CSSProperties = {
    minHeight: 260,
  };
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  return (
    <div style={contentStyle}>
      <Title level={3}>{step.title}</Title>
      <Title level={4}>{step.description}</Title>
      {isVideo && <ReactPlayer url={step.content} />}
      {isText && <Paragraph>{step.content}</Paragraph>}
      {isImage && (
        <Image
          width={400}
          height={300}
          alt={step.description}
          src={step.content}
        />
      )}
      {isHtml && <div>{ReactHtmlParser(step.content)}</div>}
    </div>
  );
};

export default Content;
