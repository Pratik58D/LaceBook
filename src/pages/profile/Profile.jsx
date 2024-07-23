import React from "react";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import coverPicture from "../../../public/assets/person/cover.jpeg";
import profilePicture from "../../../public/assets/person/5.jpg";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverimg" src={coverPicture} alt="post" />
              <img className="profileUserimg" src={profilePicture} alt="" />
            </div>

            <div className="profileInfo">
              <h4 className="ProfileInfoName">Pratik Devkota</h4>
              <span className="ProfileInfoDesc">
                Computer Engineering Student.
              </span>
            </div>
          </div>
          <div className="ProfileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
