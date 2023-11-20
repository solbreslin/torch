import React, { ReactNode } from 'react';
import { GlobalHeader } from './../../features/GlobalHeader/GlobalHeader';

import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <GlobalHeader />
      <Outlet />
    </>
  );
};