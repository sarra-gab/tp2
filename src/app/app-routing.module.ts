import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'menu',
  component:MenuComponent
},
{
  path:'welcome',
  component:WelcomeComponent
},
{
  path:'userList',
  component:UserListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
