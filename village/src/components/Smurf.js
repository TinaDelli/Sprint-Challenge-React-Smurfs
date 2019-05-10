import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
    <img
        className="home-image"
        src="https://sciencescholars2017.files.wordpress.com/2017/09/smurfs-cartoon-wallpapers.jpg?w=299&h=224"
        alt=""
      />
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => props.setUpdateForm(props)} className="edit-button">
          Edit Smurf
      </button>
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

