//import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar"
//import Footer from "./components/Footer/Footer"
//import Header from "./components/Header"
//import SearchBar from "./components/SearchBar"
//import JobCard from "./components/JobCard/JobCard"
//import Login from "./components/Login/Login"
import JobCard from "./components/JobCard/JobCard"
//import LoginDetails from "./components/Login/LoginDetails"
//import SeekerRegistration from "./components/SeekerRegisteration/Registration"
//import SeekerDisplay from "./components/SeekerDisplay"
//import RegistrationDisplay from "./components/SeekerRegisteration/RegistrationDisplay"
import jobData from "./JobDummyData"

function App() {
 

  return (
    
    <div>
      
      {jobData.map((job)=>(
        <JobCard key={job.id} {...job}/>
      ))}
      
      
      
     
    </div>
    
    
  )
}

export default App
