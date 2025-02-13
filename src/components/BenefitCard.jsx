import React from 'react';
import { Check } from 'lucide-react';

const BenefitCard = ({ benefit }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
      <div className="flex items-center space-x-3">
        <div className="bg-blue-100 p-3 rounded-full">
          <Check className="text-blue-600 w-6 h-6" />
        </div>
        <h3 className="font-semibold text-lg text-gray-800">{benefit}</h3>
      </div>
    </div>
  );
};

export default BenefitCard;