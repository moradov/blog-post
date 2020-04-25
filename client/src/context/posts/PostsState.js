import React, { useReducer } from "react";
import axios from "axios";
import PostsContext from "./postsContext";
import postsReducer from "./postsReducer";
import { CLEAR_ADD_FIELDS, POSTS_LOADED } from "../types";

const PostsState = props => {
  const initState = {
    posts: [
      {
        _id: 1,
        title: "Tech Review",
        body:
          "Line 21  The href attribute requires a valid value to be accessible. Provide a valid navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles",
        author: "bradly",
        categorie: ["healt", "sport"]
      },
      {
        _id: 2,
        title: " best audience for ever in main ",
        body:
          "Line 21  The href attribute requires a valid value to be accessible. Provide a valid navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles",
        author: "adolf",
        categorie: ["healt", "sport", "kitcheen", "food"]
      },
      {
        _id: 3,
        title: "Tech Review",
        body:
          "Line 21  The href attribute requires a valid value to be accessible. Provide a valid navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles",
        author: "bradly",
        categorie: ["tech", "web devolopment", "javaScript"]
      },
      {
        _id: 4,
        title: "dump title",
        body:
          "Line 21  The href attribute requires a valid value to be accessible. Provide a valid navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles",
        author: "skot ralf",
        categorie: ["blogs skills", "content managmeny"]
      },
      {
        _id: 5,
        title: "five title",
        body:
          "Line 21  The href attribute requires a valid value to be accessible. Provide a valid navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles",
        author: "jack dunny",
        categorie: ["online marketing", "salle managmet"]
      }
    ],
    categories: ["sport", "tech", "kitcheen", "healt"],
    clearAddFields: false
  };

  const [state, dispatch] = useReducer(postsReducer, initState);

  const getPosts = async () => {
    try {
      const res = await axios.get("/api/posts");
      dispatch({ type: POSTS_LOADED, payload: res.data });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addPost = async dataForm => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("api/posts/add", dataForm, config);
      dispatch({ type: CLEAR_ADD_FIELDS });
    } catch (error) {}
  };

  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        categories: state.categories,
        clearAddFields: state.clearAddFields,
        addPost,
        getPosts
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};
export default PostsState;
