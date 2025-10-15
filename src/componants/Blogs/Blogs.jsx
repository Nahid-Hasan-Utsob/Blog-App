import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Card from "../Bookmarks/Bookmarks";

export default function Blogs({handleAddToBookmarks}) {
  // data fetch start hare
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("/public/server.json")
      .then((res) => res.json())
      .then((data) => setBlogData(data))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return <div className="w-[60%] max-w-7xl mx-auto" >
      {
            blogData.map(blogdata =>  <Blog key={blogdata.id} blogData={blogdata} handleAddToBookmarks={handleAddToBookmarks}></Blog> )
      }
  </div>;
}
