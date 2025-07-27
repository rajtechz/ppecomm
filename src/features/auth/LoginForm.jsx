import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showLoginModal } from './AuthSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Show the login modal when this component mounts
  React.useEffect(() => {
    dispatch(showLoginModal());
    // Navigate back to home after showing modal
    navigate('/');
  }, [dispatch, navigate]);

  // This component now just triggers the modal and redirects
  return null;
};

export default LoginForm;