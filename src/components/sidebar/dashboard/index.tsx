import React from "react";
import { DashboardMenu } from '../../menu';
import { Logo } from '../../logo';

export const DashboardSidebar: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <Logo className="mb-8" width="175px" />
      <DashboardMenu />
    </div>
  );
};
