import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignInOrLogInComponent } from './sign-in-or-log-in/sign-in-or-log-in.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [{path:'login',component:LoginComponent},{path:"SignInLogIn",component:SignInOrLogInComponent},{path:"**",component:AccueilComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
