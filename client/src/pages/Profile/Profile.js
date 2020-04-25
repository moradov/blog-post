import React, { Fragment, useContext, useState, useEffect } from "react";
import "./Profile.scss";
import postsContext from "../../context/posts/postsContext";
import Post from "../../components/Posts/Post";
import ProfileModel from "../../components/ProfileModel/ProfileModel";
import ProfileUI from "../../components/ProfileUI/ProfileUI";
import usersContext from "../../context/UserContext/UserContext";
import axios from "axios";

const Profile = ({ match }) => {
  //pull user and posts context
  const { user } = useContext(usersContext);
  const { posts } = useContext(postsContext);
  //related user UI state
  const [edit, SetShowEdit] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userPosts, setUserPosts] = useState(null);
  // UI state hundler
  const editToggle = () => SetShowEdit(!edit);
  axios
    .get(`/api/users/${match.params.id}`)
    .then((res) => setUserId(res.data._id))
    .catch((err) => console.log(err));
  useEffect(() => {
    if (userId) {
      const findPosts = posts.filter((post) => post.user);
      if (findPosts) {
        setUserPosts(findPosts);
        console.log(findPosts);
      }
    }
  }, [userId, posts]);
  return (
    <Fragment>
      {edit ? <ProfileModel editToggle={editToggle} /> : null}
      <ProfileUI editToggle={editToggle} />
    </Fragment>
  );
};

export default Profile;
