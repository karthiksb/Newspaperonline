import React from "react";
import { useState, useEffect } from "react";

function Sports({ modelcontent, modal }) {
  const [post, setPost] = useState([]);
  const [covid, setcovidStats] = useState([]);

  const [trendingclr, setTrendingclr] = useState("bg-red-400");
  const [news, setNews] = useState(
    "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=14ca7051b89b45fca6adf6fc35da4824"
  );
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f8c12d704dmsh9d800336105051fp1ebb98jsn3cb33ae80541",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(news).then((response) =>
      response.json().then((data) => setPost(data.articles))
    );
    fetch("https://covid-193.p.rapidapi.com/statistics?country=India", options)
      .then((response) => response.json())
      .then((response) => setcovidStats(response.response))
      .catch((err) => console.error(err));

    console.log("ss");
  }, [news]);

  covid.forEach((article) => {
    console.log(article.time);
  });
  function setupModal(post) {
    modal(true);
    modelcontent(post);
  }
  return (
    <div>
      <div className="py-[160px] container mx-auto">
        {post.map((post) => (
          <div
            onClick={() => setupModal(post)}
            className="flex flex-col  items-center  mt-0 mb-4  "
          >
            <div className="w-[90%] p-5 h-auto bg-[#333] items-center rounded-md">
              <div className="flex  justify-between gap-24 mb-3">
                <div>
                  {" "}
                  <h1 className="text-xl text-white">{post.title}</h1>
                  <h1 className="text-sm mt-2 text-gray-400">{post.author}</h1>
                  <h1 className="text-mds mt-2 text-gray-400">
                    {post.description}
                  </h1>
                </div>{" "}
                <img
                  className="rounded-lg max-w-[150px] "
                  src={post.urlToImage}
                  alt=""
                />
              </div>

              <a href={post.url} className=" text-md text-blue-400">
                View full coverage
              </a>
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sports;
