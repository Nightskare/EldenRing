import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignInOrLogInComponent } from './sign-in-or-log-in/sign-in-or-log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BuildComponent } from './build/build.component';

const routes: Routes = [{path:'login',component:LoginComponent},{path:'signin',component:SignInComponent},{path:'build',component:BuildComponent},{path:"**",component:SignInOrLogInComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
