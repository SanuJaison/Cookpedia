import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing-module';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { DownloadList } from './download-list/download-list';
import { AdminHeader } from './admin-header/admin-header';
import { AdminSidebar } from './admin-sidebar/admin-sidebar';
import { ManageRecipe } from './manage-recipe/manage-recipe';
import { FeedbackList } from './feedback-list/feedback-list';
import { UserList } from './user-list/user-list';
import { RecipeList } from './recipe-list/recipe-list';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminDashboard,
    DownloadList,
    AdminHeader,
    AdminSidebar,
    ManageRecipe,
    FeedbackList,
    UserList,
    RecipeList,
  ],
  imports: [CommonModule, AdminModuleRoutingModule, FormsModule],
})
export class AdminModuleModule {}
