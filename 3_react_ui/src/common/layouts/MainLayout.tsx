import React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>
    <header>
      <h1>Multi-Website App</h1>
    </header>
    <main>{children}</main>
  </div>
);

export default MainLayout;
