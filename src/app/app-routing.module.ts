import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignInOrLogInComponent } from './sign-in-or-log-in/sign-in-or-log-in.component';
import { TestComponent } from './test/test/test.component';

const routes: Routes = [{path:'login',component:LoginComponent}, {path:"api", component:TestComponent}, {path:"**",component:SignInOrLogInComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
