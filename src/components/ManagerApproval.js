import React, { useState } from "react";

const ManagerApproval = () => {
  const handleInfo = () => {
    const reasonData = prompt("Provide the reason!");
    setReason(reasonData);
  };
  const [reason, setReason] = useState("");

  console.log(reason);

  return (
    <div
      className=""
      style={{ marginTop: "5px", paddingTop: "5px", backgroundColor: "white" }}
    >
      <h2 style={{ padding: "1rem 0", fontSize: "1.5rem" }}>
        Manager Approval
      </h2>
      <table>
        <tbody>
          <tr>
            <th>Employee Id</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Number of Days</th>
            <th>Action</th>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button>Apply</button>
              <button style={{ marginLeft: "5px" }}>Reject</button>
              <button style={{ marginLeft: "5px" }} onClick={handleInfo}>
                Need More Info
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManagerApproval;
