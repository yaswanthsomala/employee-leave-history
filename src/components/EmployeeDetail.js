import React, { useState } from "react";
import axios from "axios";
// import Calendar from "react-calendar";

const EmployeeDetail = () => {
  const [empId, setEmpId] = useState("");

  const handleApply = async () => {
    const { data } =
      await axios.get(`http://34.201.131.37:8000/api/api/employee/apply_leave?emp_id=${empId}&startDate=&endDate=
    `);
    console.log(data);
  };

  const handleEmpId = (e) => {
    setEmpId(e.target.value);
  };

  const handleStartDate = (data) => {
    console.log(new Date(data));
  };

  console.log(empId);

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
            <label for="fname">Employee ID</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Employee Name"
              onChange={handleEmpId}
            />
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <label for="start">From Date</label>
            <input
              type="date"
              id="start"
              name="start"
              onChange={handleStartDate}
            />
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <label for="end">To Date</label>
            <input type="date" id="end" name="end" />
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
