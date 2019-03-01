import React from 'react';

const Errors = (props) => {
  if (!props.errors || props.errors.length === 0) return null;
  return (
    <div className="errors">
      {
        props.errors.map((err, i) => <p key={`err-${i}`}>{err}</p>)
      }
    </div>
  );
};

export default Errors;
