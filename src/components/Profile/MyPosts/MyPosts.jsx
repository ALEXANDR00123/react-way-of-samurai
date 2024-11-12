import React from "react";
import s from "./MyPosts.module.scss";
import MyPost from "./Post/MyPost";

const MyPosts = () => {
  return (
    <div>
      My posts
        <div className={s.posts}>
        <MyPost message='First comment mothefackers'/>
        <MyPost message='Suck my dick first of all'/>
      </div>
    </div>
  );
};

export default MyPosts;
