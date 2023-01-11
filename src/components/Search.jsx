import React, { useRef, useState } from "react";
import Blogs from "./Blogs";

export default function Search({ blogList, setBlogs }) {
  // var [search, setSearch] = useState(null);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // function inputHandler(e) {
  //   setSearch(e.target.value);
  //   console.log(search);
  // } on key down, if i type something,
  // it gives me the initial/previously typed value excluding the latest typed character.
  // Eg: 1st time keydown-->it gives null that's initial value set using useState
  var searchInput = useRef();

  function searchHandler() {
    var titleSearched = searchInput.current.value.toLowerCase();
    var searchedBlog = blogList.find((blog) =>
      blog.title.toLowerCase().includes(titleSearched)
    );
    // var blogToSearch = blogList.find((blog) => {
    //   if (blog.title.includes(titleSearched)) {
    //     return blog;
    //   } else {
    //     return undefined;
    //   }
    // });
    //   if (blogToSearch) {
    //     console.log("yes");
    //   }
    console.log(searchedBlog);
    if (searchedBlog) {
      setBlogs(searchedBlog);
    } else setBlogs((blogList.length = 0));
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search By Title"
        className="searchByTitle"
        ref={searchInput}
        // onKeyDown={inputHandler}
      ></input>
      <button className="search-btn" onClick={searchHandler}>
        Search
      </button>
    </div>
  );
}
