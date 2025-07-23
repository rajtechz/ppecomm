import { useDispatch, useSelector } from 'react-redux';
import { login, signup, logout } from './AuthSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, isAuthenticated, loading, error } = useSelector((state) => state.auth);

  const loginUser = async (credentials) => {
    return dispatch(login(credentials));
  };

  const signupUser = async (userData) => {
    return dispatch(signup(userData));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    user,
    token,
    isAuthenticated,
    loading,
    error,
    loginUser,
    signupUser,
    logoutUser,
  };
};

export default useAuth;