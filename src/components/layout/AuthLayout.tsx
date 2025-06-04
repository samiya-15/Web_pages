import React from 'react';
import leafImage from '../../assets/leaf.jpg';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex overflow-hidden">
      {/* Left side (form) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10">
        {children}
      </div>

      {/* Right side (image) */}
      <div className="hidden lg:block lg:w-1/2 relative bg-[#f6f6f4]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={leafImage}
            alt="Monstera leaves"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
