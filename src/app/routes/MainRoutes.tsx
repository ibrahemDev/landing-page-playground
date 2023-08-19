import React, { lazy, Suspense, useEffect } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';



const HomePage = lazy(() => import('@/app/pages/homePage/HomePage'));


const MainLayoutRoutes: RouteObject = {
  path: '/',

  children: [
    {
      path: '/',
      element: (
        <Suspense>
          <HomePage />
        </Suspense>
      ),
    },
   
  ],
};

export default MainLayoutRoutes;
