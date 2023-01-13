import React, { useRef } from "react";

export default function Search({ blogs, setBlogs }) {
  var searchInput = useRef();

  function searchHandler() {
    // this component not working expectadely
    var titleSearched = searchInput.current.value.toLowerCase();
    console.log(titleSearched);
    if (blogs) {
      console.log(blogs);
      var searchedBlog = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(titleSearched)
      );
      console.log(searchedBlog);
      if (searchedBlog) {
        setBlogs(searchedBlog);
        console.log(searchedBlog);
      }
      if (searchedBlog.length === 0) {
        // setBlogs([]);
        blogs.length = 0;
        console.log("no blog with this title");
      }
    } else {
      console.log("no blog to search");
    }
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
