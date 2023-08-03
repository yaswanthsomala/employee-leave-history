import React, { useState, useEffect } from "react";
import axios from "axios";

// import Calendar from "react-calendar";

const EmployeeDetail = ({ isLoading, setIsLoading }) => {
  const [empId, setEmpId] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [response, setResponse] = useState({});

  const handleApply = async () => {
    setIsLoading(true);
    await axios
      .post(
        `http://34.201.131.37:8000/api/api/employee/apply_leave?emp_id=${empId}&startDate=${startDate}&endDate=${endDate}
    `
      )
      .then((res) => setResponse(res?.data?.msg))
      .catch((error) => alert("Something went wrong"));
    authorize();
    setIsLoading(false);
  };

  console.log(response);

  const handleEmpId = (e) => {
    setEmpId(e.target.value);
  };

  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };
  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };

  let api_url =
    "https://dsm-1.tasklist.camunda.io/80bcf54c-fe41-4d5a-b71e-d402c537bb71/v1/tasks/search";

  let api_token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVVXdPVFpDUTBVM01qZEVRME0wTkRFelJrUkJORFk0T0RZeE1FRTBSa1pFUlVWRVF6bERNZyJ9.eyJodHRwczovL2NhbXVuZGEuY29tL29yZ0lkIjoiNTJiZmMzZDktYTVmNy00MDU1LTkzOWYtODcwYWU0ZGE5MzRhIiwiaXNzIjoiaHR0cHM6Ly93ZWJsb2dpbi5jbG91ZC5jYW11bmRhLmlvLyIsInN1YiI6Im13bzkwdDJyMzE2MDd6MzZCTkg2OXRXRktCWDU1ajFXQGNsaWVudHMiLCJhdWQiOiJ0YXNrbGlzdC5jYW11bmRhLmlvIiwiaWF0IjoxNjkxMDI5NjkzLCJleHAiOjE2OTExMTYwOTMsImF6cCI6Im13bzkwdDJyMzE2MDd6MzZCTkg2OXRXRktCWDU1ajFXIiwic2NvcGUiOiI4MGJjZjU0Yy1mZTQxLTRkNWEtYjcxZS1kNDAyYzUzN2JiNzEiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.C9RMU0WdQhsZqUs6BRbnQ2hFXa_svux4ePUiXo_Oex3QvCOgiCkT8iq79rEgYT0C7f0HqhnpFCtXHfUkpQgv4yEiKF0iTvgh6TRogyFMQxUW8yJo2hLJ9KMmDcmbS3iWbAaFMGUU7JM8k8lzDHjxqBymkq0manWYBFtI93-sNCMu0adgvx168cDEnza7lMWxGFgQ3wmqN4c7Uzwx_5k74Rt6LqThFO-CHLgpxSdGSd-Zl3yME2Igs_TgJMLCVqnYmKY54cZXHpdQqeuF_EQeOwd8Ws0fMH8jYgcMAXfjYu6gczg2FXPBjwxFe0bTArBoDB2mCs88lPON6b44vKtOLg";

  const authorize = async () => {
    let payload = {
      state: "CREATED",
      assigned: true,
      processInstanceKey: response?.processInstanceKey,
      processDefinitionKey: response?.processDefinitionKey,
      candidateUser: 1,
    };

    fetch(api_url, {
      method: "POST", // You can use other HTTP methods like POST, PUT, DELETE, etc.
      headers: {
        Authentication: `Bearer ${api_token}`,
        body: payload,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));

    // const res = await fetch(api_url, requestOptions).catch(
    //   console.log("error failed")
    // );
    // const data = await res.json();
    // api_token = data.token;
    // console.log("Successful Authorization. Token: " + api_token);
    // console.log(data, "data");
  };

  return (
    <>
      <h2 style={{ padding: "1rem 0", fontSize: "1.5rem" }}>Employee Leave</h2>
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
            alignItems: "center",
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
            <button onClick={handleApply} disabled={isLoading}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetail;
