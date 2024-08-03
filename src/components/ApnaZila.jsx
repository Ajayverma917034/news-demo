"use client"
import React, { useEffect, useState } from "react";
import httpClient from "../../../../Task/Personal/projects/janpadnews-next/src/api/httpClient";
import Heading from "../../../../Task/Personal/projects/janpadnews-next/src/lib/Heading";
import ApnaNavbar from "./apna-section/ApnaNavbar";
import ApnaNews from "./apna-section/ApnaNews";
import SideNews from "./side-news/SideNews";
const districts = [
  "all",
  "sonbhadra",
  "chandauli",
  "mirzapur",
  "varanasi",
  "gajipur",
  "shahjhapur",
  "prayagraj",
  "deoria",
  "bareilly",
  "lakhimpur kheri",
  "pilibhit",
  "singrauli",
];
const ApnaZila = () => {
  const [currentDistrictIndex, setCurrentDistrictIndex] = useState(1);
  const [data, setData] = useState(null);

  const fetchNewsDistrictWise = () => {
    setData(null);
    httpClient
      .post(`get-news-query`, {
        district:
          currentDistrictIndex === 0
            ? "apna zila"
            : districts[currentDistrictIndex],
      })
      .then(({ data }) => {
        setData(data);
        // console.log(data);
      })
      .catch((err) => {
        setData(null);
        console.log(err);
      });
  };
  useEffect(() => {
    fetchNewsDistrictWise();
  }, [currentDistrictIndex]);
  return (
    <div className="flex spacing mt-2 sm:mt-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-6 mx-auto w-full gap-x-5">
        <div className="flex flex-col flex-wrap md:col-span-4 overflow-hidden w-full">
          <Heading title={"अपना जिला"} />

          <div className=" p-3 bg-[#1f2024]">
            <ApnaNavbar
              navItems={districts}
              currentIndex={currentDistrictIndex}
              setCurrentIndex={setCurrentDistrictIndex}
              hint={"district"}
            />
            <ApnaNews
              data={data}
              navItems={districts}
              currentIndex={currentDistrictIndex}
              hint={"district"}
            />
          </div>
        </div>
        <div className="flex flex-col md:gap-y-10 gap-y-2  md:col-span-2 md:mt-10">
          <SideNews title={"education"} limit={6} />
        </div>
      </div>
    </div>
  );
};

export default ApnaZila;
