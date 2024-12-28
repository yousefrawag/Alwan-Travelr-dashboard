import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import SignIn from '../pages/Authentication/SignIn.jsx';
import SignUp from '../pages/Authentication/SignUp.jsx';
import Profile from '../pages/Profile.jsx';
import Settings from '../pages/Settings.jsx';
import DefaultLayout from '../layout/DefaultLayout.jsx';
import DashboardProvider from '../context/DashboardProviedr.jsx';
import { AdminRoutes } from './AdminRoutes.jsx';

const AppRoutes = () => {



  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardProvider><DefaultLayout /></DashboardProvider>,
      children:  [
       ...AdminRoutes,
       
        {
          path: "/profile",
          element: <Profile />,
        },
    
        {
          path: "/settings",
          element: <Settings />,
        },
   
        {
          path: "/auth/signin",
          element: <SignIn />,
        },
        {
          path: "/auth/signup",
          element: <SignUp />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
