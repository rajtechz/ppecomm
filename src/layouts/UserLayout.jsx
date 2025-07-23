import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/footer/Footer';

const UserLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className=" mx-auto ">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default UserLayout;