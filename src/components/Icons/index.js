import React from 'react';

const ChevronDownIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    className={`w-6 h-6 ${className}`}
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 12.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L10 12.586z"
      clipRule="evenodd"
    />
  </svg>
);

export { ChevronDownIcon };