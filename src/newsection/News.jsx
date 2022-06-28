import React from "react";

import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Health from "../Category/Health";
import Sports from "../Category/Sports";
import Entertainment from "../Category/Entertainment";
import India from "../Category/India";
import Science from "../Category/Science";
import Homepage from "../Category/Homepage";
import PostModal from "../Modal/PostModal";
function News() {
  const [post, setPost] = useState([]);
  const [covid, setcovidStats] = useState([]);
  const [modalcontent, setmodalcontent] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [trendingclr, setTrendingclr] = useState("bg-red-400");
  const [news, setNews] = useState(
    "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=14ca7051b89b45fca6adf6fc35da4824"
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

  console.log(openModal);
  return (
    <div className="min-h-[100vh] max-h-auto bg-[#222]">
      {openModal && <PostModal data={modalcontent} closemodal={setOpenModal} />}

      <BrowserRouter>
        {" "}
        <header className="bg-[#252525] flex flex-col gap-4 h-[140px] fixed  w-full ">
          <nav className="w-full  text-white h-[80px] bg-[#252525] flex flex-row justify-between items-center px-5">
            <h1 className="text-xl">News</h1>
            <input
              className="w-[700px] h-[70%] bg-[#2b2a2a] px-10 rounded-lg outline-none"
              placeholder="Search for news"
            />
            <h1>hi user</h1>
          </nav>

          <div className="container  h-[60px]  text-[#c9c7c7] mx-auto flex justify-around">
            <Link to="/homenews" className="">
              Home
            </Link>

            <Link to="/india" className="">
              India
            </Link>
            <Link to="/entertainment" className="">
              Entertainment
            </Link>
            <Link to="/health" className="">
              Health
            </Link>
            <Link to="/sports" className="">
              Sports
            </Link>
            <Link to="/science" className="">
              Science
            </Link>
          </div>
        </header>
        <Switch>
          <Route exact path="/homenews">
            <Homepage modelcontent={setmodalcontent} modal={setOpenModal} />
          </Route>
          <Route exact path="/showcase">
            <div className="py-[160px]"> showcase</div>
          </Route>
          <Route exact path="/india">
            <India modelcontent={setmodalcontent} modal={setOpenModal} />{" "}
          </Route>
          <Route exact path="/entertainment">
            <Entertainment
              modelcontent={setmodalcontent}
              modal={setOpenModal}
            />
          </Route>
          <Route exact path="/health">
            <Health modelcontent={setmodalcontent} modal={setOpenModal} />
          </Route>
          <Route exact path="/sports">
            <Sports modelcontent={setmodalcontent} modal={setOpenModal} />
          </Route>
          <Route exact path="/science">
            <Science modelcontent={setmodalcontent} modal={setOpenModal} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default News;
