import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BuildComponent } from './build/build.component';
import { ListItemComponent } from './list-item/list-item.component';
import { CharacterComponent } from './character/character.component';


const routes: Routes = [{path:'login',component:LoginComponent},{path:'ListeItem',component:ListItemComponent},{path:"api", component:TestComponent},{path:'signin',component:SignInComponent},{path:'build',component:BuildComponent},{path:'character',component:BuildComponent}, {path:"**",component:AccueilComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
