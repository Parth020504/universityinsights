import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200 hover:border-blue-200">
      <div className="flex items-center space-x-4">
        <span className="text-4xl">{country.flag}</span>
        <div>
          <h3 className="font-bold text-xl text-gray-800">{country.name}</h3>
          <p className="text-gray-600">{country.keyFeature}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;