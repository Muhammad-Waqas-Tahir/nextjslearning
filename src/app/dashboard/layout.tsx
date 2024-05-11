import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <h4>Weclome to Dahboard Layout</h4>
    </div>
  );
};

export default layout;
