// src/components/DashboardLayout.js
import React from 'react';
import SideMenu from './SideMenu';

const DashboardLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <SideMenu />
      <div style={{ flexGrow: 1, padding: '160px' }}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
