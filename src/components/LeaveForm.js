import React from "react";
import EmployeeDetail from "./EmployeeDetail";
import ManagerApproval from "./ManagerApproval";
import EmployeeReapply from "./EmployeeReapply";

const LeaveForm = () => {
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <EmployeeDetail />
        <ManagerApproval />
        <EmployeeReapply />
      </div>
    </div>
  );
};
export default LeaveForm;
