//import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
//import SearchBar from "./components/SearchBar/SearchBar"
// import Login from "./components/Login/Login"

// import LoginDetails from "./components/Login/LoginDetails"
// import SeekerRegistration from "./components/SeekerRegisteration/Registration"
// import SeekerDisplay from "./components/SeekerDisplay/SeekerDisplay"
// import RegistrationDisplay from "./components/SeekerRegisteration/RegistrationDisplay"
//import JobCard from "./components/JobCard/JobCard"
//import jobData from "./JobDummyData"
import {  Routes, Route,  } from 'react-router-dom';
import TermOfService from "./components/Pages/TermOfService"
import PrivacyPolicy from "./components/Pages/PrivacyPolicy"
import ContactUs from "./components/Pages/ContactUs"
import JobListings from "./components/JobCard/Joblistings"
import JobDisplay from "./components/JobCard/JobDisplay";
import Recruiter from "./components/Recruiters/Recruiter";
import AboutUs from "./components/Pages/AboutUs";

function App() {
 

  return (
    
    <div>
      <Navbar/>
      <Header/>
      
      
      
       {/* <SearchBar/>
      {jobData.map((job) => (
        <JobCard key={job.id} {...job}/>
      ))} */}
      
      
    <Routes>
        <Route path="/jobs" element={<JobDisplay/>}/>
        <Route path="/recruiter" element={<Recruiter/>}/>
        
        
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/termservice" element={<TermOfService/>}/>
        <Route path="/contact" element={<ContactUs/>} />
      
    </Routes>

    
      <Footer/>
     
    </div>
    
    
  )
}

export default App
