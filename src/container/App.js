import React,{useEffect, useState} from 'react';
import Profile from '../component/Profile';
import Axios from 'axios';
import "./App.css";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Details from "../component/Details"
import Error from '../component/Error';
 
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
    <Router className="cf">
      <Routes>
         <Route exact path="/" element={<Profile userInfo={user} />} />  
         <Route path="/user/:username" element={<Details />} /> 
         <Route path="*" element={<Error />} /> 
      </Routes>
   </Router>
  )
}

export default App;