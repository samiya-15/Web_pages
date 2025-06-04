import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import AuthLayout from '../components/layout/AuthLayout';
import SocialButtons from '../components/auth/SocialButtons';
import FormDivider from '../components/ui/FormDivider';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log({ name, email, password, agreeToTerms });
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8">Get Started Now</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-700 transition-all"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-700 transition-all"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-700 transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                className="w-4 h-4 mt-0.5 text-green-700 rounded focus:ring-2 focus:ring-green-500"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                required
              />
              <span className="ml-2 text-sm text-gray-700">
                I agree to the {' '}
                <Link to="/terms" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  terms & policy
                </Link>
              </span>
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#4B6F44] text-white py-2.5 rounded-md font-medium hover:bg-[#3F5D39] active:bg-[#334D2E] transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
          >
            Signup
          </button>
        </form>
        
        <FormDivider text="Or" className="my-6" />
        
        <SocialButtons />
        
        <p className="text-center mt-8 text-sm text-gray-600">
          Have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
            Sign In
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Signup;