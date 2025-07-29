import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from './router/AppRoutes';
import store from './store';
import { initializeAdminAuth } from './features/auth/AdminAuthSlice';
import './index.css';

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Initialize admin auth from localStorage on app load
    dispatch(initializeAdminAuth());
  }, [dispatch]);

  return <AppRoutes />;
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;