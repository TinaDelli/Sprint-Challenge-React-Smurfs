import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      {/* <button onClick={() => props.setUpdateForm(props.smurf)} className="edit-button">
          Update Smurf
      </button> */}
        <button onClick={() => props.deleteSmurf(props.id)} className="md-button">
                Delete Smurf
            </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

