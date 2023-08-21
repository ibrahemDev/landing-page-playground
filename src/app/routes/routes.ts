import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import InteriaInteriorRoutes from '../landing_pages/interia_interior_design/routes/interia_interior_routes';


export default function ThemeRoutes() {
  return useRoutes([MainRoutes,InteriaInteriorRoutes]);
}
