import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        <Navbar />
        <div className="flex-1   overflow-auto mt-16 p-8">
          <Content />
          
        </div>
        
      </div>
      
    </div>
  );
};

export default Dashboard;


