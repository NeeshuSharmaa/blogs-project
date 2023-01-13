import React, { useRef } from "react";

export default function Search({ blogs, setBlogs }) {
  var searchInput = useRef();

  function searchHandler() {
    // this component not working expectadely
    var titleSearched = searchInput.current.value.toLowerCase();
    var searchedBlog = blogs.filter((blog) =>
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
