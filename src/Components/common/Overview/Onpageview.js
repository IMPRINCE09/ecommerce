import React from "react";

import Quickview from "./Quickview";

function Onpageview({ prev, open, setOpen }) {
  return (
    <div className="w-full">
      {prev ? (
        <>
          <Quickview prev={prev} open={open} setOpen={setOpen} />
        </>
      ) : null}
    </div>
  );
}

export default Onpageview;
