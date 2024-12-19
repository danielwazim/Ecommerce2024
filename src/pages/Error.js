import React, { useState } from "react";

const Profile = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f8d7da",
      color: "#721c24",
      textAlign: "center",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "1rem",
    },
    message: {
      fontSize: "1.25rem",
      marginBottom: "2rem",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      cursor: "pointer",
      backgroundColor: "#f5c6cb",
      border: "none",
      borderRadius: "5px",
      color: "#721c24",
      transition: "background-color 0.3s",
    },
  };
  return (
    <>
      <div className="d-flex flex-row justify-content-center justify">
        <h1 style={{ marginTop: "300px" }}>Oops! Something went wrong.</h1>
      </div>
    </>
  );
};

export default Profile;
