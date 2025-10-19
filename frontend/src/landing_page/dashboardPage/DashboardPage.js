import React from "react";

const DashboardPage = () => {
  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src="http://localhost:3000"
        width="100%"
        height="100%"
        title="Dashboard"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default DashboardPage;
