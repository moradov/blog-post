import React, { useContext, useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import "./Search.scss";
import userContext from "../../../context/UserContext/UserContext";
import postsContext from "../../../context/posts/postsContext";
const Search = ({ history }) => {
  //pull the context values
  const { searchControl } = useContext(userContext);
  const { posts } = useContext(postsContext);
  //set input state
  const [inputValue, setInputValue] = useState("");
  //set found restults state
  const [foundPosts, setFoundPosts] = useState([]);

  let targetPost = [];
  // search input hundler
  const searchInputHund = (event) => {
    setInputValue(event.target.value);
    // filter the results
    targetPost = posts.filter(
      (post) => post.title.indexOf(event.target.value) > 0
    );
    // set the results
    setFoundPosts(targetPost);
  };
  // onclick on post results should  redirect to blog post single page
  const postResultClicked = (id) => {
    history.push(`/post/${id}`);
    setInputValue("");
    setFoundPosts([]);
    searchControl(false);
  };
  // close the search UI
  const closeCilcked = () => {
    searchControl(false);
  };
  return (
    <Fragment>
      <div className='search'>
        <div className='search-disc'>
          <span>Seach</span>
        </div>
        <div className='search-bar'>
          <input
            type='search'
            name='search'
            placeholder='find blog...'
            onChange={searchInputHund}
            value={inputValue}
          />
          <i className='fas fa-search'></i>
        </div>
        <div className='close'>
          <span onClick={closeCilcked}>X</span>
        </div>
      </div>

      <div className='search-result'>
        <ul>
          {inputValue.length > 0 && foundPosts.length == 0 ? (
            <li>Not found </li>
          ) : (
            foundPosts.map((post) => (
              <li key={post.id} onClick={() => postResultClicked(post.id)}>
                {post.title}{" "}
              </li>
            ))
          )}
        </ul>
      </div>
    </Fragment>
  );
};

export default withRouter(Search);
