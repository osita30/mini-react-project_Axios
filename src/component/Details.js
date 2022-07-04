import React,{useState,useEffect} from 'react'
import {useNavigate,useParams } from 'react-router-dom'
import axios  from 'axios';
import tachyons from 'tachyons';
import App from '../container/App.css';

const Details = () => {

    let nav = useNavigate();
    let {username} = useParams();

    const[user, setUser] = useState([]);

  const profileData = async ()=>{
    const datefile = await axios(`https://api.github.com/users/${username}`)
     setUser(datefile.data)
  };
 
  useEffect(()=>{ 
   profileData();
  }, []);
  
  console.log(user,"data")

  return (
    <div className="tc dp22">
     <div>
       <button className='btn' onClick={()=>{nav("/")}}> Previous Page</button>
      </div>
        <img className='br' src= {user.avatar_url} />
      <div className='items'>
        <h3 className="item1">Name: {user.login}</h3>
        <h3 className='item2'>Node: {user.node_id}</h3>
        <h3 className='item3'>Type :{user.type}</h3>
        <h3 className='item4'>ID:{user.id}</h3>
        <h3 className='item5'>Follower:{user.following}</h3> 
      
      </div>
    </div>
  )
}

export default Details