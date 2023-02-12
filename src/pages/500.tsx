import React from "react";
import { Button, Result } from "antd";
import Link from "next/link";

const App: React.FC = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={
      <Button type="primary">
        <Link href="/">Back Home</Link>
      </Button>
    }
  />
);

export default App;
