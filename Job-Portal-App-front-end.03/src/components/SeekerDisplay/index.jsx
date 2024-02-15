// Inside the parent component
import React, { useState } from 'react';
import Form from './For';
import DisplayData from './DisplayData';

const index = () => {
  const [formData, setFormData] = useState({
    // Initialize form data state here
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <Form onFormSubmit={handleFormSubmit} />
      {Object.keys(formData).length > 0 && <DisplayData formData={formData} />}
    </div>
  );
};

export default index
