import views from 'views';
import {DETAIL, HOME, LOGIN, SEARCH} from './paths';

export const privateRoutes = [
  {
    path: HOME,
    component: views.Home,
    exact: true
  },
  {
    path: SEARCH,
    component: views.Home
  },
  {
    path: DETAIL,
    component: views.Detail
  }
];

export const publicRoutes = [
  {
    path: LOGIN,
    component: views.Login
  }
];
