"use client"

import React, { useEffect, useState } from "react";
import SubNewsCard from "./SubNewsCard";
import Heading from "../../../../../Task/Personal/projects/janpadnews-next/src/lib/Heading";
import httpClient from "../../../../../Task/Personal/projects/janpadnews-next/src/api/httpClient";
import { findHindi } from "../../../../../Task/Personal/projects/janpadnews-next/src/assets/data";
import SideNewsSkelton from "@/skeleton/SideNewsSkelton";


const SideNews = ({ title = "", limit = "5" }) => {
  const [data, setData] = useState(null);
  const fetchNews = async () => {
    httpClient
      .post("/fetch-sidebar-news", {
        limit: limit,
        news_section_type: [title],
      })
      .then(({ data }) => {
        setData(data.news);
      })
      .catch((err) => {
        setData([]);
        console.log(err);
      });
  };

  useEffect(() => {
    // fetchNews();
  }, []);
  return data === null ? (
    <SideNewsSkelton />
  ) : data.length === 0 ? (
    <></>
  ) : (
    <div className=" flex-col gap-y-3 py-3 px-5 shadow-light-shadow rounded-md  hidden lg:flex ">
      <Heading title={findHindi(title)} />
      <div className="flex lg:flex-col gap-y-4 gap-5">
        {data &&
          data.length > 0 &&
          data.map((item, index) => <SubNewsCard key={index} data={item} />)}
      </div>
    </div>
  );
};

export default SideNews;
