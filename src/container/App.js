import React,{useEffect, useState} from 'react';
import Profile from '../component/Profile';
import Axios from 'axios';
import "./App.css";

const App = () => {
  
const[user, setUser] = useState([]);

  const profileData = async ()=>{
    const datefile = await Axios.get("https://api.github.com/users")
     setUser(datefile.data)
  };
 
  useEffect(()=>{ 
   profileData();
  }, []);

  return (
    <div className='main-div'>
     <Profile userInfo={user}/>
    </div>

  )
}

export default App;