import React from "react";

const ManagerApproval = () => {
  const handleInfo = () => {
    prompt("Provide the reason!");
  };

  return (
    <div
      className=""
      style={{ marginTop: "5px", paddingTop: "5px", backgroundColor: "white" }}
    >
      <h2>Manager Approval</h2>
      <table>
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
      </table>
    </div>
  );
};

export default ManagerApproval;
