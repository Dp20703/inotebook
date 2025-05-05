import React, { useEffect } from 'react';

function Alert(props) {
  const capitalize = (word) => {
    if (word === 'danger') {
      word = 'error';
    }
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  // Automatically dismiss the alert after 3 seconds (3000ms)
  useEffect(() => {
    if (props.alert) {
      const timer = setTimeout(() => {
        props.setAlert(null); // make sure to pass this function from parent
      }, 3000);
      return () => clearTimeout(timer); // cleanup
    }
  }, [props.alert]);

  return (
    <div style={{ marginTop: "56px", marginBottom: "16px", height: '50px' }}>
      {props.alert &&
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>}
    </div>
  );
}

export default Alert;
