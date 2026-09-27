import { Routes } from '@angular/router';
import { Recipes } from './users/recipes/recipes';
import { About } from './users/about/about';
import { Contact } from './users/contact/contact';
import { Collections } from './users/collections/collections';
import { Login } from './users/login/login';
import { Register } from './users/register/register';
import { Profile } from './users/profile/profile';
import { ViewRecipe } from './users/view-recipe/view-recipe';
import { Pnf } from './users/pnf/pnf';
import { Home } from './users/home/home';
import { authGuard } from './guard/auth-guard';
import { adminguardGuard } from './guard/adminguard-guard';

export const routes: Routes = [
  //lazy loading http://localhost:4200/admin
  {
    path: 'admin',
    canActivate: [adminguardGuard],
    loadChildren: () =>
      import('./admin-module/admin-module-module').then((module) => module.AdminModuleModule),
  },
  {
    path: '',
    component: Home,
    title: 'Home',
  },
  {
    path: 'recipes',
    component: Recipes,
    title: 'Recipies',
  },
  {
    path: 'about',
    component: About,
    title: 'About',
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact',
  },
  {
    path: 'collection',
    canActivate: [authGuard],
    component: Collections,
    title: 'Collection',
  },
  {
    path: 'login',
    component: Login,
    title: 'Login',
  },
  {
    path: 'register',
    component: Register,
    title: 'Register',
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    component: Profile,
    title: 'Profile',
  },
  {
    path: 'recipe/:id',
    canActivate: [authGuard],
    component: ViewRecipe,
    title: 'View Pecipes',
  },
  {
    path: '**',
    component: Pnf,
    title: 'Page Not Found',
  },
];
