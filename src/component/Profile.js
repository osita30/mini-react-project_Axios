import React from 'react'
import {Link} from "react-router-dom"
import tachyons from "tachyons"
import App from '../container/App.css'

const Profile = ({userInfo}) => {  

  return (
    
        <div className="main">
    {
      userInfo.map((item)=>{
        return(
          <div className='main-2' key ={item.id} >
          <img className='imp ' alt= "avatar" src= {item.avatar_url}/><br /> 
        
          <button className='btn' ><Link  className= "madd"to={`/user/${item.login}`}>More info</Link></button> 

          </div>
          
        )  
      })
    }
    </div>  
)
}
export default Profile;