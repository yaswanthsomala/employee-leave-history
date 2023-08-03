import React, { useState } from "react";

const EmployeeReapply = () => {
  const [empReason, setEmpReason] = useState("");

  const handleReason = (e) => {
    setEmpReason(e.target.value);
  };

  console.log(empReason);

  const handleReApply = () => {
    console.log("Re-Apply");
  };

  return (
    <div
      className=""
      style={{ marginTop: "5px", paddingTop: "5px", backgroundColor: "white" }}
    >
      <h2 style={{ padding: "1rem 0", fontSize: "1.5rem" }}>
        Employee Re-Apply
      </h2>
      <table>
        <tbody>
          <tr>
            <th>Employee Id</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Need More Info</th>
            <th>Action</th>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <input
                placeholder="provide reason"
                onChange={handleReason}
                style={{ width: "98%" }}
              ></input>
            </td>
            <td>
              <button onClick={handleReApply}>Re-Apply</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeReapply;
