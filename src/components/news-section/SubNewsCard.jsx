import React from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

function SubNewsCard({ data }) {
  return (
    <Link
      href={`/news/${data?.news_id}`}
      className="flex w-full flex-row gap-4"
    >
      <div className="h-[80px] min-w-[120px]">
        <Image
          src={data?.banner}
          alt="Image"
          width={1200}
          height={400}
          sizes={{
            maxWidth: "100%",
            height: "auto",
          }}
          className="object-cover"
          // onError={handleImageError}
        />
      </div>
      <div className="flex flex-col lg:w-3/4">
        <h1 className="news-title-sm line-clamp-3">{data?.title}</h1>
      </div>
    </Link>
  );
}

export default SubNewsCard;
