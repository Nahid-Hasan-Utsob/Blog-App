import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FcBookmark } from "react-icons/fc";
export default function Blog({ blogData, handleAddToBookmarks }) {
  const { id, author, author_img, cover, posted_date, reading_time, title } =
    blogData;

  const [active, setActive] = useState(false);
  // console.log(bookmarkData);

  const handleActiveLog = () => {
    setActive(!active);
    console.log(active);
  };

  return (
    <section className="">
      <section>
        <div className="">
          <img className="rounded-xl w-full" src={cover} alt="" />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-5 h-32 items-center">
            <div>
              <img className="w-15" src={author_img} alt="" />
            </div>
            <div>
              <p className="text-2xl font-bold">{author}</p>
              <p className="text-base font-semibold text-[#8c8c8c]">
                {posted_date}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p>{reading_time} min read</p>
            {
              <button
                onClick={() => {
                  handleAddToBookmarks(blogData);
                  handleActiveLog();
                }}
                className="text-3xl transition-transform duration-500 hover:scale-110"
              >
                {active ? <FcBookmark /> : <FaRegBookmark />}
              </button>
            }
          </div>
        </div>

        <div
          className="flex
        flex-col gap-3 pb-18"
        >
          <p className="text-[40px] font-bold">{title}</p>
          <p className="text-gray-500 text-xl">#beginners #programming</p>

          <a className="underline text-xl text-blue-800 font-semibold" href="">
            Mark as read
          </a>
        </div>
      </section>
    </section>
  );
}
