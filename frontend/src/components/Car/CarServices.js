import React from 'react'


const CarServices = ({ serviceName, serviceMileage, nextDue }) => {
  
    let mileageDue = nextDue[serviceName] + serviceMileage
  
    return (
      <tr>
        <td>{serviceName}</td>
        <td>{serviceMileage}</td>
        <td>{mileageDue}</td>  
      </tr>
    )
  }
  
export default CarServices