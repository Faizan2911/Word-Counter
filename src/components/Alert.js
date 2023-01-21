import React from "react";

function Alert(props) {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>{props.alert.type}</strong> : {props.alert.mes}
    
    </div>
  );
}

export default Alert;
