import React, { useState } from 'react';
import dog1 from '../images/dog1.jpg';
import dog2 from '../images/dog2.webp';
import dog3 from '../images/dog3.jpg';
import dog4 from '../images/dog4.webp';
import dog5 from '../images/dog5.jpg';
import dog6 from '../images/dog6.jpg';
import dog7 from '../images/dog7.jpg';
import dog8 from '../images/dog8.jpg';
import dog9 from '../images/dog9.jpg';
import dog10 from '../images/dog10.jpg';
import dog11 from '../images/dog11.jpg';
import dog12 from '../images/dog12.jpg';
import dog13 from '../images/dog13.webp';
import dog14 from '../images/dog14.jpg';
import dog15 from '../images/dog15.jpg';
import dog16 from '../images/dog16.jpg';
import dog17 from '../images/dog17.png';
import dog18 from '../images/dog18.jpg';
import dog19 from '../images/dog19.jpg';
import dog20 from '../images/dog20.jpg';
import dog21 from '../images/dog21.jpg';
import dog22 from '../images/dog22.jpg';
import dog23 from '../images/dog23.jpg';
import dog24 from '../images/dog24.png';
import dog25 from '../images/dog25.webp';
import dog26 from '../images/dog26.png';
import dog27 from '../images/dog27.jpg';
import Modal from './Modal';

const Dogs = ({ filters }) => {
  const [showModal, setShowModal] = useState(false);
  const dogs = [
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Chippiparai', image: dog1 },
    { age: 'Adult', gender: 'Female', state: 'TamilNadu', district: 'Chennai', breed: 'Chippiparai', image: dog2 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Karur', breed: 'Gull Dong', image: dog3 },
    { age: '1-2 years', gender: 'Male', state: 'TamilNadu', district: 'Coimbatore', breed: 'Gull Dong', image: dog4 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Gull Dong', image: dog5 },
    { age: '6-7 months', gender: 'Female', state: 'TamilNadu', district: 'Chennai', breed: 'Indian Spitz', image: dog6 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Indian Spitz', image: dog7 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu',district: 'Coimbatore', breed: 'Indian Spitz', image: dog8 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: '  Madurai', breed: 'Indian pariah dog', image: dog9 },
    { age: '1-2 years', gender: 'Male', state: 'TamilNadu', location: 'Karur', breed: 'Indian pariah dog', image: dog10 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', location: 'Namakkal', breed: 'Indian pariah dog', image: dog11 },
    { age: 'Adult', gender: 'Female', state: 'TamilNadu', location: 'Salem', breed: 'Indian pariah dog', image: dog12 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', location: 'Coimbatore', breed: 'Indian pariah dog', image: dog13 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', location: 'Sivagangai', breed: 'Kanni', image: dog14 },
    { age: '6-7 months', gender: 'Female', state: 'TamilNadu', location: 'Madurai', breed: 'Kanni', image: dog15 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', location: 'Pudukkottai', breed: 'Kanni', image: dog16},
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', location: 'Ramanathapuram', breed: 'Kanni', image: dog17 },
    { age: '6-7 months', gender: 'male', state: 'TamilNadu', location: 'Theni', breed: 'Kombai', image: dog18 },
    { age: '6-7 months', gender: 'male', state: 'TamilNadu', location: 'Madurai', breed: 'Kombai', image: dog19},
    { age: '1-2 years', gender: 'male', state: 'TamilNadu', location: 'Erode', breed: 'Kombai', image: dog20 },
    { age: 'Adult', gender: 'male', state: 'TamilNadu', location: 'Sivagangai', breed: 'Kombai', image: dog21},
    { age: 'Adult', gender: 'male', state: 'TamilNadu', location: 'Pudukkottai', breed: 'Kombai', image: dog22 },
    { age: '6-7 months', gender: 'male', state: 'TamilNadu', location: 'Ramanathapuram', breed: 'Rajapalayam', image: dog23},
    { age: '6-7 months', gender: 'male', state: 'TamilNadu', location: 'Madurai', breed: 'Rajapalayam', image: dog24 },
    { age: '1-2 years', gender: 'male', state: 'TamilNadu', location: 'Theni', breed: 'Rajapalayam', image: dog25 },
    { age: 'Adult', gender: 'male', state: 'TamilNadu', location: 'Sivagangai', breed: 'Rajapalayam', image: dog26},
    { age: 'Adult', gender: 'male', state: 'TamilNadu', location: 'Dindigul', breed: 'Rajapalayam', image: dog27 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Chippiparai', image: dog1 },
    { age: 'Adult', gender: 'Female', state: 'TamilNadu', district: 'Chennai', breed: 'Chippiparai', image: dog2 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Karur', breed: 'Gull Dong', image: dog3 },
    { age: '1-2 years', gender: 'Male', state: 'TamilNadu', district: 'Coimbatore', breed: 'Gull Dong', image: dog4 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Gull Dong', image: dog5 },
    { age: '6-7 months', gender: 'Female', state: 'TamilNadu', district: 'Chennai', breed: 'Indian Spitz', image: dog6 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Indian Spitz', image: dog7 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu',district: 'Coimbatore', breed: 'Indian Spitz', image: dog8 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: '  Madurai', breed: 'Indian pariah dog', image: dog9 },
    { age: '1-2 years', gender: 'Male', state: 'TamilNadu', location: 'Karur', breed: 'Indian pariah dog', image: dog10 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', location: 'Namakkal', breed: 'Indian pariah dog', image: dog11 },
    { age: 'Adult', gender: 'Female', state: 'TamilNadu', location: 'Salem', breed: 'Indian pariah dog', image: dog12 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', location: 'Coimbatore', breed: 'Indian pariah dog', image: dog13 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', location: 'Sivagangai', breed: 'Kanni', image: dog14 },
    { age: '6-7 months', gender: 'Female', state: 'TamilNadu', location: 'Madurai', breed: 'Kanni', image: dog15 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', location: 'Pudukkottai', breed: 'Kanni', image: dog16},
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', location: 'Ramanathapuram', breed: 'Kanni', image: dog17 },
    { age: '6-7 months', gender: 'male', state: 'TamilNadu', location: 'Theni', breed: 'Kombai', image: dog18 },
    { age: '6-7 months', gender: 'male', state: 'TamilNadu', location: 'Madurai', breed: 'Kombai', image: dog19},
    { age: '1-2 years', gender: 'male', state: 'TamilNadu', location: 'Erode', breed: 'Kombai', image: dog20 },
    { age: 'Adult', gender: 'male', state: 'TamilNadu', location: 'Sivagangai', breed: 'Kombai', image: dog21},
    { age: 'Adult', gender: 'male', state: 'TamilNadu', location: 'Pudukkottai', breed: 'Kombai', image: dog22 },
    { age: '6-7 months', gender: 'male', state: 'TamilNadu', location: 'Ramanathapuram', breed: 'Rajapalayam', image: dog23},
    { age: '6-7 months', gender: 'male', state: 'TamilNadu', location: 'Madurai', breed: 'Rajapalayam', image: dog24 },
    { age: '1-2 years', gender: 'male', state: 'TamilNadu', location: 'Theni', breed: 'Rajapalayam', image: dog25 },
    { age: 'Adult', gender: 'male', state: 'TamilNadu', location: 'Sivagangai', breed: 'Rajapalayam', image: dog26},
    { age: 'Adult', gender: 'male', state: 'TamilNadu', location: 'Dindigul', breed: 'Rajapalayam', image: dog27 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Chippiparai', image: dog1 },
    { age: 'Adult', gender: 'Female', state: 'TamilNadu', district: 'Chennai', breed: 'Chippiparai', image: dog2 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Karur', breed: 'Gull Dong', image: dog3 },
    { age: '1-2 years', gender: 'Male', state: 'TamilNadu', district: 'Coimbatore', breed: 'Gull Dong', image: dog4 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Gull Dong', image: dog5 },
    { age: '6-7 months', gender: 'Female', state: 'TamilNadu', district: 'Chennai', breed: 'Indian Spitz', image: dog6 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Indian Spitz', image: dog7 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu',district: 'Coimbatore', breed: 'Indian Spitz', image: dog8 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: '  Madurai', breed: 'Indian pariah dog', image: dog9 },
    { age: '1-2 years', gender: 'Male', state: 'TamilNadu', location: 'Karur', breed: 'Indian pariah dog', image: dog10 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', location: 'Namakkal', breed: 'Indian pariah dog', image: dog11 },
    { age: 'Adult', gender: 'Female', state: 'TamilNadu', location: 'Salem', breed: 'Indian pariah dog', image: dog12 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', location: 'Coimbatore', breed: 'Indian pariah dog', image: dog13 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', location: 'Sivagangai', breed: 'Kanni', image: dog14 },
    { age: '6-7 months', gender: 'Female', state: 'TamilNadu', location: 'Madurai', breed: 'Kanni', image: dog15 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', location: 'Pudukkottai', breed: 'Kanni', image: dog16},
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', location: 'Ramanathapuram', breed: 'Kanni', image: dog17 },
    { age: '6-7 months', gender: 'male', state: 'TamilNadu', location: 'Theni', breed: 'Kombai', image: dog18 },
    { age: '6-7 months', gender: 'male', state: 'TamilNadu', location: 'Madurai', breed: 'Kombai', image: dog19},
    { age: '1-2 years', gender: 'male', state: 'TamilNadu', location: 'Erode', breed: 'Kombai', image: dog20 },
    { age: 'Adult', gender: 'male', state: 'TamilNadu', location: 'Sivagangai', breed: 'Kombai', image: dog21},
    { age: 'Adult', gender: 'male', state: 'TamilNadu', location: 'Pudukkottai', breed: 'Kombai', image: dog22 },
    { age: '6-7 months', gender: 'male', state: 'TamilNadu', location: 'Ramanathapuram', breed: 'Rajapalayam', image: dog23},
    { age: '6-7 months', gender: 'male', state: 'TamilNadu', location: 'Madurai', breed: 'Rajapalayam', image: dog24 },
    { age: '1-2 years', gender: 'male', state: 'TamilNadu', location: 'Theni', breed: 'Rajapalayam', image: dog25 },
    { age: 'Adult', gender: 'male', state: 'TamilNadu', location: 'Sivagangai', breed: 'Rajapalayam', image: dog26},
    { age: 'Adult', gender: 'male', state: 'TamilNadu', location: 'Dindigul', breed: 'Rajapalayam', image: dog27 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Chippiparai', image: dog1 },
    { age: 'Adult', gender: 'Female', state: 'TamilNadu', district: 'Chennai', breed: 'Chippiparai', image: dog2 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Karur', breed: 'Gull Dong', image: dog3 },
    { age: '1-2 years', gender: 'Male', state: 'TamilNadu', district: 'Coimbatore', breed: 'Gull Dong', image: dog4 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Gull Dong', image: dog5 },
    { age: '6-7 months', gender: 'Female', state: 'TamilNadu', district: 'Chennai', breed: 'Indian Spitz', image: dog6 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Indian Spitz', image: dog7 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu',district: 'Coimbatore', breed: 'Indian Spitz', image: dog8 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: '  Madurai', breed: 'Indian pariah dog', image: dog9 },
    { age: '1-2 years', gender: 'Male', state: 'TamilNadu', location: 'Karur', breed: 'Indian pariah dog', image: dog10 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', location: 'Namakkal', breed: 'Indian pariah dog', image: dog11 },
    { age: 'Adult', gender: 'Female', state: 'TamilNadu', location: 'Salem', breed: 'Indian pariah dog', image: dog12 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', location: 'Coimbatore', breed: 'Indian pariah dog', image: dog13 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', location: 'Sivagangai', breed: 'Kanni', image: dog14 },
    { age: '6-7 months', gender: 'Female', state: 'TamilNadu', location: 'Madurai', breed: 'Kanni', image: dog15 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', location: 'Pudukkottai', breed: 'Kanni', image: dog16},
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', location: 'Ramanathapuram', breed: 'Kanni', image: dog17 },
    { age: '6-7 months', gender: 'male', state: 'TamilNadu', location: 'Theni', breed: 'Kombai', image: dog18 },
    { age: '6-7 months', gender: 'male', state: 'TamilNadu', location: 'Madurai', breed: 'Kombai', image: dog19},
    { age: '1-2 years', gender: 'male', state: 'TamilNadu', location: 'Erode', breed: 'Kombai', image: dog20 },
    { age: 'Adult', gender: 'male', state: 'TamilNadu', location: 'Sivagangai', breed: 'Kombai', image: dog21},
    { age: 'Adult', gender: 'male', state: 'TamilNadu', location: 'Pudukkottai', breed: 'Kombai', image: dog22 },
    { age: '6-7 months', gender: 'male', state: 'TamilNadu', location: 'Ramanathapuram', breed: 'Rajapalayam', image: dog23},
    { age: '6-7 months', gender: 'male', state: 'TamilNadu', location: 'Madurai', breed: 'Rajapalayam', image: dog24 },
    { age: '1-2 years', gender: 'male', state: 'TamilNadu', location: 'Theni', breed: 'Rajapalayam', image: dog25 },
    { age: 'Adult', gender: 'male', state: 'TamilNadu', location: 'Sivagangai', breed: 'Rajapalayam', image: dog26},
    { age: 'Adult', gender: 'male', state: 'TamilNadu', location: 'Dindigul', breed: 'Rajapalayam', image: dog27 },
    
  ];

  const filteredDogs = dogs.filter((dog) => {
    return (
      (filters.age ? dog.age === filters.age : true) &&
      (filters.gender ? dog.gender === filters.gender : true) &&
      (filters.state ? dog.state === filters.state : true) &&
      (filters.district ? dog.district === filters.district : true) &&
      (filters.breed ? dog.breed === filters.breed : true)
    );
  });
 
  const handleAdoptClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmitModal = (userDetails) => {
    console.log('User Details:', userDetails);
    setShowModal(false);
    // You can handle the user details submission logic here
  };

  return (
    <div className="dogs-container">
      <h3>Dogs Available for Adoption</h3>
      {filteredDogs.length > 0 ? (
        <div className="card-container">
          {filteredDogs.map((dog, index) => (
            <div key={index} className="card">
              <img src={dog.image} alt={dog.name} className="card-image" />
              <div className="card-content">
                <h4>{dog.name}</h4>
                <p>Age: {dog.age}</p>
                <p>Gender: {dog.gender}</p>
                <p>Size: {dog.size}</p>
                <p>Location: {dog.location}</p>
                <p>Breed: {dog.breed}</p>
                <button className="adopt-button" onClick={handleAdoptClick}>Adopt</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No dogs match the selected filters.</p>
      )}
      <Modal show={showModal} handleClose={handleCloseModal} handleSubmit={handleSubmitModal} />
    </div>
  );
};

export default Dogs;