import React from 'react';

interface FormDividerProps {
  text: string;
  className?: string;
}

const FormDivider: React.FC<FormDividerProps> = ({ text, className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex-grow h-px bg-gray-300"></div>
      <div className="px-3 text-sm text-gray-500">{text}</div>
      <div className="flex-grow h-px bg-gray-300"></div>
    </div>
  );
};

export default FormDivider;