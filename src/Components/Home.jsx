import React,{useState,useEffect} from 'react'
import axios from 'axios'
import User from './User'
const Home = () => {
    const[user,setUser]=useState([])
    useEffect(()=>{
        const fetchUserData=async()=>{
            const {data}=await axios.get("https://randomuser.me/api/?results=20")
            setUser(data.results)
        }
        fetchUserData()
    },[])
  return (
    <div className='home'>
        <table className='table-heading'>
        <tr>
            <th className='image'>IMAGE</th>
            <th className='name'>NAME</th>
            <th className='email'>EMAIL</th>
            <th className='gender'>GENDER</th>
        </tr>
    </table>
        {
            user.map((i)=><User Image={i.picture.medium} fname={i.name.first} lname={i.name.last} title={i.name.title} email={i.email} gender={i.gender} />)
        }
    
    </div>
  )
}

export default Home