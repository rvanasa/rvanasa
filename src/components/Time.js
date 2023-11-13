import React from 'react';

export default function Time(props) {
  return (
    <div className="px-4 py-3" style={{ background: '#080808' }}>
      <h4 className="float-end">{props.year}</h4>
      <h5 className="mb-1">{props.month}</h5>
    </div>
  );
}
