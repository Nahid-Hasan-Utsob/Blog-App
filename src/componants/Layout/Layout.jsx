import React, { useState } from "react";
import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmarks/Bookmarks";

export default function Layout() {
  const [bookmarkData, setBookmarkData] = useState([]);

  // toggle add/remove bookmark
  const handleAddToBookmarks = (blogData) => {


    setBookmarkData((prev) =>
      prev.some((item) => item.id === blogData.id)
        ? prev.filter((item) => item.id !== blogData.id)
        : [...prev, blogData]
    );
    
  };

  return (
    <div>
      <div className="lg:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookmarks={handleAddToBookmarks} />
        <Bookmarks bookmarkData={bookmarkData} />
      </div>
    </div>
  );
}
