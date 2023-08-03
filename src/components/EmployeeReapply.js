import React from "react";

const EmployeeReapply = () => {
  return (
    <div
      className=""
      style={{ marginTop: "5px", paddingTop: "5px", backgroundColor: "white" }}
    >
      <h2>Employee Re-Apply</h2>
      <table>
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
              style={{ width: "98%" }}
            ></input>
          </td>
          <td>
            <button>Re-Apply</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default EmployeeReapply;
