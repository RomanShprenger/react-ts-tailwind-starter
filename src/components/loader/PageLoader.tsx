import React from 'react';

export const PageLoader: React.FC  = () => {
  return (
    <div className="bg-slate-100 h-screen px-12 py-16 flex flex-col items-center justify-center">
      <div className="text-base text-blue-500">Loading...</div>
    </div>
  );
};
