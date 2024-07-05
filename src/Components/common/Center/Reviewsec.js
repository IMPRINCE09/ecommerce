import React from "react";
import "./Reviewsec.css";

function Reviewsec() {
  return (
    <div className="w-full  min-h-96 flex flex-wrap  justify-center items-center review_sec_div">
      <div className="w-1/2  pt-4 ">
        <div className="w-full flex items-center justify-center">
          <iframe
            width=""
            height=""
            src="https://www.youtube.com/embed/0sIb8D8F5jc?si=qAluTtpNbUuDXqsW"
            title="YouTube video player"
            frameborder="90"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="w-1/2  p-3 justify-center  items-center">
        <h1 className="text-center text-black  text-xl">
          What our customer say
        </h1>
        <h4 className="text-center text-lg text-black ">
          Thank you for shopping with us! Each order means the world to us, and
          we’re so happy you chose our small business today. Please submit your
          feedback here if you have any feedback about your purchase.
        </h4>
      </div>
    </div>
  );
}

export default Reviewsec;
