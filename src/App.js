
import axios from 'axios';
import {useState,useEffect} from 'react';
import './App.css';

function App() {

  const [userData, setUserData] = useState({});

  const fetchData = () => {
    axios.get("https://randomuser.me/api").then(
      (res)=>{
        setUserData(res.data.results);
      }
    );
    console.log(userData[0]);
  };

  useEffect( () =>{
      fetchData();
  },[]);

  return (
    <div className="App flex justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="grid place-content-center gap-1 bg-gradient-to-r from-[#BC0FF2] to-[#790EE8] w-auto h-auto rounded-xl shadow-lg">
        <h1 className='font-bold text-3xl my-3 text-white'>User</h1>
        <img alt= "Photo" className='object-none object-center rounded-full my-3 shadow-xl justify-self-center border-white border-4' src={userData[0]?.picture?.large}/>
        <h2 className='text-left mx-3 bg-white rounded-md px-4 shadow-lg'>Gender: {userData[0]?.gender}</h2>
        <h2 className='text-left my-3 mx-3 bg-white rounded-md px-4 shadow-lg'>Name: {userData[0]?.name?.title + ' ' + userData[0]?.name?.first + ' ' + userData[0]?.name?.last}</h2>
        <h2 className='text-left mx-3 bg-white rounded-md px-4 shadow-lg'>From: {userData[0]?.location?.city}, {userData[0]?.location?.country}</h2>
        <h2 className='text-left my-3 mx-3 bg-white rounded-md px-4 shadow-'>Email: {userData[0]?.email}</h2>
        <button onClick={fetchData} className='text-white font-bold bg-[#5906EB] w-1/2 justify-self-center mb-5 rounded-md border-2 border-white hover:bg-[#2A0FEB]'>Generate</button>
      </div>
    </div>
  );
}

export default App;
