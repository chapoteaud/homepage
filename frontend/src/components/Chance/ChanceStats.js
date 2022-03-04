import React from 'react'

const ChanceStats = (props) => {
    return (
      <tr>
        <td>{props.statType}</td>
        <td>{props.statValue}</td>
        <td>{props.age}</td>
        <td>{props.change}</td>  
      </tr>
    )
  }

  
export default ChanceStats