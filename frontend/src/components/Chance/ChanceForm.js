import React from 'react'
import FormFields from '../FormFields'
import Button from 'react-bootstrap/Button';

const ChanceForm = ({ onSubmit, value, statName, chanceAge, handleStatChange, handleValueChange, handleAgeChange }) => {
    return (
      <div>
          <form onSubmit={onSubmit}>
            <div>
              <FormFields value={statName} onChange={handleStatChange} placeholder="e.g. height, weight, etc." label="Stat Type:"/>
            </div>
            <div>
              <FormFields value={value} onChange={handleValueChange} placeholder="" label="Value:"/>
            </div>
            <div>
              <FormFields value={chanceAge} onChange={handleAgeChange} placeholder="" label="Age (months):"/>
            </div>         
            <Button className="formBtn" type="submit" size="sm" variant="success">Save</Button>
          </form>
      </div>
    )
  }

export default ChanceForm

