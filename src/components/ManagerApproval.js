import React from "react";

const ManagerApproval = () => {
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
          <th>Action</th>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <button>Apply</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ManagerApproval;
