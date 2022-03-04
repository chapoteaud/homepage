import React from 'react'
import Form from 'react-bootstrap/Form';


const FormFields = ({ value, onChange, placeholder, label }) => {
    return (
      <>
        <Form.Label>{label}</Form.Label>
        <Form.Control size="sm" value={value} onChange={onChange} placeholder={placeholder}></Form.Control>
      </>
  
    )
  }

export default FormFields