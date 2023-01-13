import React, { useRef, useState } from "react";

export default function Search({ blogList, setBlogs }) {
  var searchInput = useRef();

  function searchHandler() {
    console.log(blogList);
    var titleSearched = searchInput.current.value.toLowerCase();
    var searchedBlog = blogList.filter((blog) =>
      blog.title.toLowerCase().includes(titleSearched)
    );
    console.log(searchedBlog);
    if (searchedBlog) {
      setBlogs([searchedBlog]);
    } else setBlogs([]);
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search By Title"
        className="searchByTitle"
        ref={searchInput}
      ></input>
      <button className="search-btn" onClick={searchHandler}>
        Search
      </button>
    </div>
  );
}
