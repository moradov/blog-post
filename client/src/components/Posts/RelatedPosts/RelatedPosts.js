import React, { useContext } from "react";
import PropTypes from "prop-types";
import Post from "../Post";
import postsContext from "../../../context/posts/postsContext";

const RelatedPosts = ({ categorie, id }) => {
  //pull posts context values
  const { posts } = useContext(postsContext);

  let relatedPosts = [];
  //filter posts caterories with the match cat id
  categorie.forEach((cat) => {
    const filtredPost = posts.filter(
      (post) => post.categorie.indexOf(cat) > 0 && post.id !== id
    );
    filtredPost.forEach((el) => relatedPosts.push(el));
  });
  // try new way of return html
  if (relatedPosts.length > 0) {
    const html = relatedPosts.map((post) => <Post post={post} />);
    return html;
  } else {
    return <div>no Related post</div>;
  }
};
RelatedPosts.propsTypes = {
  categorie: PropTypes.string.isRequired,
};
export default RelatedPosts;
