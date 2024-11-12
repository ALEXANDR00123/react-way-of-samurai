import React from "react";
import s from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://avatars.mds.yandex.net/i?id=eb689dc7528897d195aa82f2ef9178ff650cd4c3-9847129-images-thumbs&n=13"
          alt="car user"
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
