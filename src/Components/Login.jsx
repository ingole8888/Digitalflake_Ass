import React, { useState } from 'react';
import backgroundImage from '../Accets/Background.png';
import logo from '../Accets/logo.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { loginuser, signupuser } from '../redux/authreducer/action';
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="min-h-screen" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
      <div className="w-2/5 pt-12 pl-20">
        {showLogin ? (
          <LoginForm onToggleForm={handleToggleForm} />
        ) : (
          <SignupForm onToggleForm={handleToggleForm} />
        )}
      </div>
    </div>
  );
};

const LoginForm = ({ onToggleForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginuser({ email, password })).then((message) => {
      if (message === 'Login successfully') {
        // Redirect to home page after successful login
        navigate('/');
      }
    });
  };

  const handleForgotPassword = () => {
    setShowModal(true);
  };

  const handleSendLink = () => {
    alert('Password recovery link sent to your email');
    setShowModal(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-10 pb-8 mb-4 ">
      <div className="mx-auto">
        <img src={logo} alt="Logo" className="mb-6 mx-auto" />
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="mb-8 relative">
          <label className="absolute -top-3 left-2 bg-white px-1 text-gray-600 text-xs">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-8 relative">
          <label className="absolute -top-3 left-2 bg-white px-1 text-gray-600 text-xs">Password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline pr-10"
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-600 hover:text-gray-800"
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="mb-4">
          <a href="#1" className="text-blue-500 hover:underline mb-4 block text-right" onClick={handleForgotPassword}>
            Forgot Password?
          </a>
        </div>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white shadow-md rounded px-8 py-6">
              <h2 className="text-xl font-bold mb-4 text-purple-900 mb-4">Did you forget your password?</h2>
              <p className='mb-8'>Enter your email address and we'll send you a link to restore password</p>
              <form onSubmit={handleSendLink}>
                <lable className='mb-4 block text-left'>Email Address</lable>
                <input
                  type="email"
                  placeholder="Enter your email Address"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                />
                <div className="flex justify-between mb-4">
                  <button
                    type="submit"
                    className="bg-purple-900 hover:bg-purple-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Send Link
                  </button>

                </div>
                <div>
                  <button
                    type="button"
                    className="text-blue-500 hover:underline"
                    onClick={() => setShowModal(false)}
                  >
                    Back to log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="mb-6">
          <button
            className="bg-purple-800 hover:bg-purple-900 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        <button
          type="button"
          onClick={onToggleForm}
          className="text-blue-500 hover:underline"
        >
          Don't have an account? Sign up
        </button>
      </div>
    </form>

  );
};

const SignupForm = ({ onToggleForm }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupuser({ email, password })).then((message) => {
      console.log("Message from signupuser action:", message);
      if(message === "email already in use"){
        alert("Email already in use. Please use a different email.");
      }
      else if (message === 'User created successfully') {
        navigate('/login');
      }
    });
  };
  

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mx-auto">

        <img src={logo} alt="Logo" className="mb-6 mx-auto" />
        <h2 className="text-2xl font-bold mb-6">Sign up</h2>
        <div className="mb-8 relative">
          <label className="absolute -top-3 left-2 bg-white px-1 text-gray-600 text-xs">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-8 relative">
          <label className="absolute -top-3 left-2 bg-white px-1 text-gray-600 text-xs">Password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline pr-10"
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-600 hover:text-gray-800 "
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="mb-6">
          <button
            className="bg-purple-800 hover:bg-purple-900 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Sign up
          </button>
        </div>
        <button
          type="button"
          onClick={onToggleForm}
          className="text-blue-500 hover:underline"
        >
          Already have an account? Log in
        </button>
      </div>
    </form>
  );
};

export default Login;
