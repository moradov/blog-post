import React, { useContext } from "react";
import "./Post.scss";
import postsContext from "../../context/posts/postsContext";
import WrittenBy from "../../components/Posts/WrittenBy/WrittenBy";
import RelatedPost from "../../components/Posts/RelatedPosts/RelatedPosts";
const Post = ({ match, history }) => {
  // usecontext reatch the users in posts context
  const { posts } = useContext(postsContext);
  // filter the post that's match with the current post id
  let post = posts.filter((post) => post.id === parseInt(match.params.id));
  // the filter method return array with single post object if it match
  let renderHtml;
  if (post.length > 0) {
    post = post[0];
    renderHtml = (
      <div className='single-post'>
        <div className='content'>
          <h1 className='title'>{post.title} </h1>
          <img src='https://via.placeholder.com/150' />
          <p className='post-body'>{post.body}</p>
          <div className='tags'>
            tags :{" "}
            {post.categorie.map((cat) => (
              <span>{cat} </span>
            ))}
          </div>
        </div>
        <WrittenBy />
        <div className='related-posts'>
          <h2>Realated Blosgs</h2>
          <div className='posts'>
            <RelatedPost
              categorie={post.categorie}
              key={post._id}
              id={post._id}
              history={history}
            />
          </div>
        </div>
      </div>
    );
  } else {
    renderHtml = <h2> blog not found </h2>;
  }
  return renderHtml;
};

export default Post;
