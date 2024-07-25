import React from "react";

function Allcolors() {
  const allColorsp = [
    {
      id: 1,
      i_src:
        "https://img.freepik.com/free-photo/photo-lovely-girl-model-standing-looking-camera-against-white-wall_144627-66668.jpg?t=st=1721382734~exp=1721386334~hmac=376c85c96adf9c78cdf85b030f0ab02f63f7b6d919274cf064682e080c2e611d&w=826",
      i_src_two:
        "https://img.freepik.com/free-photo/photo-pretty-girl-model-standing-pointing-aside-against-white-wall_144627-66656.jpg?t=st=1721382823~exp=1721386423~hmac=90528a49b0e8fb12dfc79e7006dfc3239ed18dbde1018870e4d0394f2779b65a&w=826",
      p_price: 500,
      rating: 4,
    },
    {
      id: 2,
      i_src:
        "https://img.freepik.com/free-photo/smiling-young-pretty-girl-pointing-side_141793-117524.jpg?t=st=1721379599~exp=1721383199~hmac=fad5663b0f7ce7d5fc73578c9096f6d144d739b89188471bc9b5e03548d652c7&w=740",
      i_src_two:
        "https://img.freepik.com/free-photo/impressed-young-pretty-woman-showing-empty-hands_141793-117189.jpg?t=st=1721379686~exp=1721383286~hmac=96117c9df33ad92d9d34ad9aca7e2d8e9b3e23b5b36833905756bd3b383feeeb&w=740",
      p_price: 500,
      rating: 5,
    },
    {
      id: 3,
      i_src:
        "https://img.freepik.com/free-photo/man-white-shirt-pointing-something_144627-48540.jpg?t=st=1721382966~exp=1721386566~hmac=8626d2eebc484c76c1451600c2981b475ff523bb57e3fc889649214c594b9ba9&w=826",
      i_src_two:
        "https://img.freepik.com/free-photo/man-white-shirt-pointing-something_144627-48483.jpg?t=st=1721382924~exp=1721386524~hmac=1191a6c8445c4058a893d0957a08492d847992894a5e040a17ede5430e303a07&w=826",
      p_price: 500,
      rating: 3,
    },
  ];

  return (
    <div className="w-full ">
      <div className="">
        <h2 className="text-center text-xl font-bold text-orange-500 m-4">
          ALL BLACK
        </h2>
      </div>
      <div className="grid grid-cols-3  ">
        {allColorsp?.map((item) => {
          return (
            <div key={item.id} className="w-72  cursor-pointer shadow-xl ">
              <div className="relative ">
                <div className=" relative hover:opacity-0 h-72">
                  <img
                    className="w-72 h-72 "
                    src={item.i_src}
                    alt="balck-1"
                  ></img>
                </div>
                <div className="absolute h-72 opacity-0 hover:opacity-100  top-0 left-0">
                  <img
                    className="w-72 h-72 "
                    src={item.i_src_two}
                    alt="balck"
                  ></img>
                </div>
              </div>
              <div className=" ">
                <h2>
                  This is Latest and Creation and basic of the security reasons
                  github link basis of the portion and deviation and duration
                  doing the
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Allcolors;
