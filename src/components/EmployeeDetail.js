import React from "react";
import Calendar from 'react-calendar';

const EmployeeDetail = () => {
  return (
    <>
      <h3 style={{padding: '1rem', fontSize: '1.5rem'}}>Employee Leave</h3>
      <div style={{paddingLeft: '1rem', paddingRight: '1rem'}}>
        <div style={{display: 'flex', paddingLeft: '1rem', padding: '1rem', gap: '1.5rem', border: '1px solid black', justifyContent: 'space-evenly', borderRadius: '5px'}}>
          <div style={{display: 'flex', gap: '1rem'}}>
            <label for="fname">Employee ID</label>
            <input type="text" id="fname" name="fname" placeholder="Employee Name" />
          </div>
          <div style={{display: 'flex', gap: '1rem'}}>
            <label for="start">Start</label>
            <input type="date" id="start" name="start" />
          </div>
          <div style={{display: 'flex', gap: '1rem'}}>
            <label for="end">End</label>
            <input type="date" id="end" name="end" />
          </div>
          <div>
            <button>Apply</button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default EmployeeDetail;
