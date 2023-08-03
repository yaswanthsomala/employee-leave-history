import React, { useState } from "react";
import EmployeeDetail from "./EmployeeDetail";
import ManagerApproval from "./ManagerApproval";
import EmployeeReapply from "./EmployeeReapply";
import Spinner from "./Spinner";

const LeaveForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="form-wrapper">
      <div className="form-container" style={{ border: "1px solid black" }}>
        {isLoading ? (
          <>
            <Spinner />
            <div className="bg-blur">
              <EmployeeDetail
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
              <ManagerApproval />
              <EmployeeReapply />
            </div>
          </>
        ) : (
          <>
            <EmployeeDetail isLoading={isLoading} setIsLoading={setIsLoading} />
            <ManagerApproval />
            <EmployeeReapply />
          </>
        )}
      </div>
    </div>
  );
};
export default LeaveForm;
