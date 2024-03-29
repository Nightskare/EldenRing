import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignInOrLogInComponent } from './sign-in-or-log-in/sign-in-or-log-in.component';
import { TestComponent } from './test/test/test.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ListItemComponent } from './list-item/list-item.component';

const routes: Routes = [{path:'login',component:LoginComponent}, {path:"api", component:TestComponent},{path:'signin',component:SignInComponent}, {path:"**",component:AccueilComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
