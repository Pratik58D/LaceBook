import React from 'react'
import "./closefriend.css"

const CloseFriend = ({closeFriend}) => {
    console.log(closeFriend)
  return (
    <li className='sidebarFriend'>
    <img  className="sidebarFriendImg"  src={closeFriend.profilePicture} alt="" />
    <span className="sidebarFriendName">{closeFriend.username}</span>
    </li> 
  )
}

export default CloseFriend
