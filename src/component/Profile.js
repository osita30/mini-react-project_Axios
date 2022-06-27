import React from 'react'

const Profile = ({userInfo}) => {
  
  return (
        <div>
    {
      userInfo.map((item)=>{
        return(
          <div key ={item.id} >
          <img  alt= "avatar" src= {item.avatar_url}/><br /> 
        
          <button className='btn'>{item.login}</button> 
          </div>
          
        )  
      })
    }
    </div>  
)
}
export default Profile;