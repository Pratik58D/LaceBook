import React,{useState} from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import likeIcon from "../../assets/like.png";
import heartIcon from "../../assets/heart.png";
import {Users} from "../../DummyData"

const Post = ({post}) => {
 const user = Users.filter(u => u.id ===1)
 // console.log(user[0].username)
  
 const [like,setLike] = useState(post.like);
 const [islike,setIsLike] = useState(false);    //assuming that post starts with no likes
 const increseLike = () =>{
  setLike(islike ? like - 1 : like + 1 )       // if islike is true means post is liked decrese by 1
  setIsLike(!islike)
 }
 
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src= {Users.filter((u)=> u.id == post?.userId)[0].profilePicture}
              alt="PP" className="postProfileImg" />
            <span className="postUsername">
              {Users.filter((u)=> u.id == post?.userId)[0].username || "Unknown User"}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="potTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src={likeIcon} alt="" className="likeIcon"  onClick={increseLike}/>
            <img src={heartIcon} alt="" className="likeIcon" onClick={increseLike} />
            <span className="postLikeCounter">{like} people liked</span>
          </div>
          <div className="postBotttomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
