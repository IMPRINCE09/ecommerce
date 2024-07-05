import React, { Component } from "react";

import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

const Controls = () => {
  const { zoomIn, zoomOut } = useControls();

  return (
    <div className="tools">
      <button
        className="px-6 py-2 bg-gray-200"
        onMouseupCapture={() => zoomIn()}
      >
        +
      </button>
      <button
        className="px-6 py-2 bg-gray-200 ml-2"
        onMouseDownCapture={() => zoomOut()}
      >
        -
      </button>
    </div>
  );
};

const Zoompan = ({ image_src }) => {
  return (
    <TransformWrapper>
      <Controls />
      <TransformComponent>
        <img
          className="w-9/12 h-96  cursor-pointer"
          src={image_src}
          alt="test"
        />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default Zoompan;
