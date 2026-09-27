import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { RecipeList } from './recipe-list/recipe-list';
import { ManageRecipe } from './manage-recipe/manage-recipe';
import { UserList } from './user-list/user-list';
import { DownloadList } from './download-list/download-list';
import { FeedbackList } from './feedback-list/feedback-list';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboard,
    title: 'Admin - Dashboard',
  },
  {
    path: 'recipes',
    component: RecipeList,
    title: 'Admin - All Recipes',
  },
  {
    path: 'recipie/add',
    component: ManageRecipe,
    title: 'Admin- Add Recipies',
  },

  { path: 'recipe/:id', component: ManageRecipe, title: 'Admin - Update Recipe' },

  {
    path: 'users',
    component: UserList,
    title: 'Admin - All Users',
  },
  {
    path: 'downloads',
    component: DownloadList,
    title: 'Admin - All downloads',
  },
  {
    path: 'feedback',
    component: FeedbackList,
    title: 'Admin - All feedbacks',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModuleRoutingModule {}
