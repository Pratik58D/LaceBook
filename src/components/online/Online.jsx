import "./online.css"

const Online = ({user}) => {

console.log()

  return (

    <div>
         <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
               <img className="rightbarProfileImg" src= {user.profilePicture} alt="PP"/>
               <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
      
    </div>
  )
}

export default Online
