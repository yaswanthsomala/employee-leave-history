import React, { useState } from "react";
import axios from "axios";
// import Calendar from "react-calendar";

const EmployeeDetail = () => {
  const [empId, setEmpId] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleApply = async () => {
    const { data } =
      await axios.post(`http://34.201.131.37:8000/api/api/employee/apply_leave?emp_id=${empId}&startDate=${startDate}&endDate=${endDate}
    `);
    console.log(data);
  };

  const handleEmpId = (e) => {
    setEmpId(e.target.value);
  };

  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };
  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <>
      <h3 style={{ padding: "1rem", fontSize: "1.5rem" }}>Employee Leave</h3>
      <div>
        <div
          style={{
            display: "flex",
            paddingLeft: "1rem",
            padding: "1rem",
            gap: "1.5rem",
            // border: "1px solid rgb(221, 221, 221)",
            border: "1px solid black",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ display: "flex", gap: "1rem" }}>
            <label htmlFor="fname">Employee ID</label>
            <input
              type="number"
              id="empId"
              name="empId"
              placeholder="Employee ID"
              onChange={handleEmpId}
            />
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <label htmlFor="start">From Date</label>
            <input
              type="date"
              id="start"
              name="start"
              onChange={handleStartDate}
            />
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <label htmlFor="end">To Date</label>
            <input type="date" id="end" name="end" onChange={handleEndDate} />
          </div>
          <div>
            <button onClick={handleApply}>Apply</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetail;
