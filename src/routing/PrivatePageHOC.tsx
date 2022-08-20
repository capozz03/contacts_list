import React, { FC, ReactElement } from 'react';
import { Navigate } from 'react-router';
import { clientCookies } from '../shared/helpers/cookies';
import { routes } from '../shared/helpers/routes';

export const PrivatePageHOC: FC<{ children: ReactElement }> = ({ children }) => {
  const token = clientCookies.getToken();
  if (!token) {
    return <Navigate to={routes.auth}/>
  }
  return children;
};