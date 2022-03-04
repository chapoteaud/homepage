import React from 'react'
import Button from 'react-bootstrap/Button';
import FormFields from './../FormFields'

const CarForm = ({ onSubmit, serviceName, serviceMileage, handleServiceChange, handleMileageChange }) => {
    return (
      <div>
          <form onSubmit={onSubmit}>
            <div>
              <FormFields value={serviceName} onChange={handleServiceChange} placeholder="e.g. Oil Change, Plugs" label="Service Type:"/>
            </div>
            <div>
              <FormFields value={serviceMileage} onChange={handleMileageChange} placeholder="Enter Mileage at time of service" label="Mileage:"/>
            </div>
            <Button className="formBtn" type="submit" size="sm" variant="success">Save</Button>
          </form>
      </div>
    )
  }

export default CarForm