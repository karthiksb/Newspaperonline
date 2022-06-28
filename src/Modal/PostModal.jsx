import React from "react";

function PostModal({ data, closemodal }) {
  return (
    <div className="postmodel fixed z-10 min-h-[100vh] max-h-auto text-white bg-[#222222e7] items-center gap-10 flex flex-col justify-center w-full ">
      <div className="flex justify-end w-[900px] text-6xl ">
        <div className="rotate-45" onClick={() => closemodal(false)}>
          +
        </div>
      </div>
      <div className="flex flex-col items-center  w-[800px] fit p-10 ">
        <div className="flex flex-col  items-center  mt-0 mb-4  ">
          <div className="w-[100%] p-5 h-auto bg-[#292828] items-center rounded-md">
            <div className="flex  justify-between gap-24 mb-3">
              <div>
                {" "}
                <h1 className="text-xl text-white">{data.title}</h1>
                <h1 className="text-sm mt-2 text-gray-400">{data.author}</h1>
                <h1 className="text-mds mt-2 text-gray-400">
                  {data.description}
                </h1>
                <h1 className="text-mds mt-2 text-gray-400">{data.content}</h1>
              </div>{" "}
              <img
                className="rounded-lg max-w-[300px] "
                src={data.urlToImage}
                alt=""
              />
            </div>

            <a href={data.url} className=" text-md text-blue-400">
              View full coverage
            </a>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default PostModal;
