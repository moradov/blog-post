import React, { useContext } from "react";
import "./Home.scss";
import Search from "../UI/Search/Search";
import Post from "../Posts/Post";
import postsContext from "../../context/posts/postsContext";
import Categorie from "../Categorie/Categorie";
import userContext from "../../context/UserContext/UserContext";

const Home = () => {
  //pull the context values
  const { posts, categories } = useContext(postsContext);
  const { loadUser } = useContext(userContext);

  return (
    <div className='home'>
      <section className='categories'>
        <div className='sec-desc'>
          <h2>categorie</h2>
          <p>you can browse any type blogos type easly</p>
        </div>
        <div className='main-cat'>
          {categories.map((categorie) => (
            <Categorie key={categorie} categorie={categorie} />
          ))}
        </div>
      </section>
      <section className='posts'>
        <div className='sec-desc'>
          <h2>Post</h2>
          <p>browse Latest Post </p>
        </div>
        <div className='main-posts'>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
