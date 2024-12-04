import React from 'react';

const ProfileCard = ({ name, bio }) => {
  const userName = prompt("Please enter your name:") ; 
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Hi, my name is {userName}</h2>
      <p className="text-gray-700">{bio}</p>
    </div>
  );
};

export default ProfileCard;
