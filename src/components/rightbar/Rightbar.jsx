import React from "react";
import "./rightbar.css";
import gift from "../../assets/gift.png";
import ad from "../../assets/ad.png";
import { Users } from "../../DummyData";
import Online from "../online/Online";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src={gift} alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Deeken</b> and<b> 3 other friends </b> have a birthday today.
          </span>
        </div>
        <img src={ad} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoitem">
            <span className="rightbarinfokey">Lives in </span>
            <span className="rightbarinfoValue">Surkhet </span>
          </div>
          <div className="rightbarInfoitem">
            <span className="rightbarinfokey">From </span>
            <span className="rightbarinfoValue">Surkhet </span>
          </div>
          <div className="rightbarInfoitem">
            <span className="rightbarinfokey">Relationship </span>
            <span className="rightbarinfoValue">Single </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="/assets/person/1.jpg"
              alt=""
              className="rightbarfollowingfImg"
            />
            <span className="rightbarfollowingName">Ayush skp</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/2.jpg"
              alt=""
              className="rightbarfollowingfImg"
            />
            <span className="rightbarfollowingName">Ayush skp</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/3.jpg"
              alt=""
              className="rightbarfollowingfImg"
            />
            <span className="rightbarfollowingName">Ayush skp</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/4.jpg"
              alt=""
              className="rightbarfollowingfImg"
            />
            <span className="rightbarfollowingName">Ayush skp</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/7.jpg"
              alt=""
              className="rightbarfollowingfImg"
            />
            <span className="rightbarfollowingName">Ayush skp</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/6.jpg"
              alt=""
              className="rightbarfollowingfImg"
            />
            <span className="rightbarfollowingName">Ayush skp</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar></HomeRightbar>}
      </div>
    </div>
  );
};

export default Rightbar;
