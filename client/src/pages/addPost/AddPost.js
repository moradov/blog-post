import React, { useState, useContext, useEffect } from "react";
import "./AddPost.scss";
import postsContext from "../../context/posts/postsContext";
import alertContext from "../../context/alert/alertContext";

const AddPost = () => {
  //pull context values from postsContext
  const { addPost, clearAddFields } = useContext(postsContext);
  //pull context values from alertContet
  const { alert } = useContext(alertContext);
  // create state to strore addPost inputs Values
  const [addPostState, setAddPost] = useState({
    title: "",
    description: "",
    categories: [],
    body: "",
  });
  // dDestructuring the state values
  const { title, description, categories, body } = addPostState;
  //clear inputs field if clearAddFields == true
  useEffect(() => {
    if (clearAddFields) {
      setAddPost({
        title: "",
        description: "",
        categories: [],
        body: "",
      });
    }
  }, [clearAddFields]);
  // add post inputes hundler
  const addPostInputHund = (event) => {
    if (event.target.name === "tags") {
      setAddPost({ ...addPostState, categories: [event.target.value] });
    } else {
      setAddPost({ ...addPostState, [event.target.name]: event.target.value });
    }
  };
  //onSubmit the from hundler
  const addPostSubmitHund = (event) => {
    event.preventDefault();
    addPost({ title, description, categories, body });
    alert("success", "Blog aded", 5000);
  };
  return (
    <div className='add-post'>
      <h2>Add Blog </h2>
      <div className='form'>
        <form onSubmit={addPostSubmitHund}>
          <div className='form-group'>
            <label htmlFor='title'>Blog title</label>
            <input
              name='title'
              type='text'
              placeholder='...Title'
              onChange={addPostInputHund}
              value={addPostState.title}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Blog description</label>
            <textarea
              name='description'
              type='text'
              placeholder='...Blog description'
              onChange={addPostInputHund}
              value={addPostState.description}
              required
            ></textarea>
          </div>
          <div className='form-group'>
            <label htmlFor='categories'>categorie</label>
            <input
              name='categories'
              type='text'
              placeholder='...Title'
              onChange={addPostInputHund}
              value={addPostState.categories}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='body'>Blog Body</label>
            <textarea
              className='post-text'
              name='body'
              type='text'
              placeholder='...Blog '
              onChange={addPostInputHund}
              value={addPostState.body}
              required
            ></textarea>
          </div>
          <input className='add-btn' type='submit' value='Add' />
        </form>
      </div>
    </div>
  );
};

export default AddPost;
