import { StepsContext } from "@/context/StepsContext";
import React, { useContext } from "react";
import { Typography } from "antd";
import ReactPlayer from "react-player";
import Image from "next/image";

const { Title, Paragraph } = Typography;

const Content = () => {
  const { steps, current } = useContext(StepsContext);
  const step = steps[current];
  const isVideo = step.type === "video";
  const isText = step.type === "text";
  const isImage = step.type === "image";

  const contentStyle: React.CSSProperties = {
    minHeight: 260,
  };
  return (
    <div style={contentStyle}>
      <Title>{step.title}</Title>
      <Title level={2}>{step.description}</Title>
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
    </div>
  );
};

export default Content;
