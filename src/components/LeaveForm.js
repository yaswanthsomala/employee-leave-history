import React from "react";
import ManagerApproval from "./ManagerApproval";
import EmployeeReapply from "./EmployeeReapply";

const LeaveForm = () => {
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <ManagerApproval />
        <EmployeeReapply />
      </div>
    </div>
  );
};
export default LeaveForm;
