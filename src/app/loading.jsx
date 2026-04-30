import { Spinner } from "@heroui/react";
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <Spinner size="xl" color="accent" />
    </div>
  );
};

export default Loading;