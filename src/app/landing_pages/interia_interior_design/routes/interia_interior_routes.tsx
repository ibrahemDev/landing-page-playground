import React, { lazy, Suspense, useEffect } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import InteriaLayout from '../layout/interia_layout';

const InteriaInteriorDesignPage = lazy(() => import('@interiaInteriorDesign/pages/InteriaInteriorDesignPage'));

const InteriaInteriorRoutes: RouteObject = {
  path: '/interia-interior-design',
  element: <InteriaLayout />,
  children: [
    {
      path: '',
      element: (
        <Suspense>
          <InteriaInteriorDesignPage />
        </Suspense>
      ),
    },
   
  ],
};

export default InteriaInteriorRoutes;
