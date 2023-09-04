import React from 'react';
// import { ReactComponent as NoFoundImg } from '../../../assets/illustrations/404-240x240.svg';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <div className="text-base theme-text-secondary">
        The page you are looking for doesn’t exist.<br/>If you think something is broken contact customer support.
      </div>
    </>
  );
}
