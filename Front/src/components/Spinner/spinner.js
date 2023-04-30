import React from "react";
import PropTypes from "prop-types";
import "./spinner.css";

export default function LoadingSpinner({ message }) {
  return (
    <>
      <div className="spinner-container">
        <div className="loading-spinner" />
      </div>
      <div className="text">{message}</div>
    </>
  );
}
LoadingSpinner.propTypes = {
  message: PropTypes.string.isRequired,
};
