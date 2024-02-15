import React from 'react';

const DisplayPage = () => {
  // Dummy user data
  const userData = {
    firstName: 'asssds',
    lastName: 'dfdf',
    dateOfBirth: 'January 1, 1990',
    college: 'Exfdfdf',
    degree: 'B.tech',
    street: '123 ',
    city: 'asd',
    state: 'ABC',
    country: 'dfdsfd',
    zipcode: '12345',
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg mb-2">
      <h1 className="text-2xl font-bold mb-4">Seeker Registration  Details Display</h1>
      <div className="mb-4">
        <label htmlFor="firstName" className="block mb-2">First Name: {userData.firstName}</label>
       
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block mb-2">Last Name: {userData.lastName}</label>
 
      </div>
      <div className="mb-4">
        <label htmlFor="dateOfBirth" className="block mb-2">Date of Birth: {userData.dateOfBirth}</label>
        
      </div>
      <div className="mb-4">
        <label htmlFor="college" className="block mb-2">College: {userData.college}</label>
        
      </div>
      <div className="mb-4">
        <label htmlFor="degree" className="block mb-2">Degree: {userData.degree}</label>
        
      </div>
      <div className="mb-4">
        <label htmlFor="street" className="block mb-2">Street: {userData.street}</label>
        
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block mb-2">City: {userData.city}</label>
        
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block mb-2">State: {userData.state}</label>
       
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="block mb-2">Country: {userData.country}</label>
        
      </div>
      <div className="mb-4">
        <label htmlFor="zipcode" className="block mb-2">Zipcode: {userData.zipcode}</label>
        
      </div>
      <div className="mb-4">
        <label htmlFor="skills" className="block mb-2">Skills Set: {userData.skills.map((skill, index) => ( <li key={index}>{skill}</li>))}</label>
        
      </div>
    </div>
  );
};

export default DisplayPage;
