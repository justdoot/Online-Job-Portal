import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        If you have any questions, feedback, or inquiries, please feel free to contact us using the information below:
      </p>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Email</h2>
        <p>info@jobportal.com</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Phone</h2>
        <p>(123) 456-7890</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Address</h2>
        <p>123 Job Portal Street, City, Country</p>
      </div>
    </div>
  );
};

export default ContactUs;
