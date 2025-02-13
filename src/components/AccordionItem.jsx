import React from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ step, isOpen, onToggle, isLast }) => {
  return (
    <div className={`border border-gray-200 rounded-lg overflow-hidden ${isLast ? '' : 'mb-4'}`}>
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <step.icon className="w-6 h-6 text-blue-600" />
          </div>
          <span className="font-semibold text-gray-700">{step.title}</span>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      
      {isOpen && (
        <div className="bg-gray-50 px-4 py-4">
          <ul className="space-y-2 pl-16">
            {step.content.map((item, index) => (
              <li key={index} className="text-gray-600 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;