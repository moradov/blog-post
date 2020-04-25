import React, { useContext } from "react";
import "./Categorie.scss";
import postsContext from "../../context/posts/postsContext";
import Post from "../../components/Posts/Post";
const Categorie = ({ match, history }) => {
  //pull the nedeed values from the context
  const { categories, posts } = useContext(postsContext);

  // check if categorie id exist in data base categories
  // eslint-disable-next-line
  const categorie = categories.filter((cat) => cat == match.params.id);

  //
  let RenderHtml = "";
  if (categorie.length > 0) {
    // if categories in the url is exist then seach for all blogs with that categorie
    const categoriePosts = posts.filter(
      (post) => post.categorie.indexOf(match.params.id) > 0
    );
    RenderHtml = (
      <div className='main-posts'>
        {categoriePosts.map((item) => (
          <Post post={item} key={item.id} history={history} />
        ))}
      </div>
    );
  } else {
    RenderHtml = <div style={{ textAlign: "center" }}>categorie not exist</div>;
  }
  return RenderHtml;
};

export default Categorie;
