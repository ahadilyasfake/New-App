import "./App.css";
import { useEffect, useState } from "react";
import Post from "./component/Post";
import Navbar from "./component/Navbar";
import Input from "./component/Input";
import axios from "axios";
import moment from "moment";

function App() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isTrue, setIsTrue] = useState(true);
  const [category, setCategory] = useState("");

  /// Get Input

  const inpuQurey = (val) => {
    setQuery(val);
  };

  ///

  const getBuyCategory = (val) => {
    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: `${val}`,
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
      },
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "651941fabcmsh0afede8d33383e0p197d9djsn104d8e869f72",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setIsLoading(false);
        console.log(response.data.value);
        setData(response.data.value);
      })
      .catch(function (error) {
        setIsLoading(false);
        console.error(error);
      });
    console.log(val);
  };

  /// on sumbit get input
  const fetchData = (event) => {
    event.preventDefault();
    console.log(query);
   getNews()
  };

  const getNews = (event) => {
    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: `${query}`,
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
      },
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "651941fabcmsh0afede8d33383e0p197d9djsn104d8e869f72",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setIsLoading(false);
        console.log(response.data.value);
        setData(response.data.value);
      })
      .catch(function (error) {
        setIsLoading(false);
        console.error(error);
      });
    console.log("click");
  };
  console.log(query);

  return (
    <div>
      <Navbar
        getBuyCategory={getBuyCategory}
      />
      <Input getInput={inpuQurey} submitInput={fetchData} />
      <>
        <section>
          <div className="container px-5 py-24 mx-auto ">
            <div className="flex flex-wrap -m-4 ">
              {data.map((val, index) => (
                <Post
                  key={index}
                  text={val.description}
                  image={val?.image?.thumbnail?.contentUrl
                    .replace("&pid=News", "")
                    .replace("pid=News&", "")
                    .replace("pid=News", "")}
                  link={val.url}
                />
              ))}
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default App;
