import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignInOrLogInComponent } from './sign-in-or-log-in/sign-in-or-log-in.component';
import { TestComponent } from './test/test.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TableauWeaponComponent } from './tableau-weapon/tableau-weapon.component';
import { TableauArmorComponent } from './tableau-armor/tableau-armor.component';
import { TableauTalismanComponent } from './tableau-talisman/tableau-talisman.component';
import { TableauShieldComponent } from './tableau-shield/tableau-shield.component';

const routes: Routes = [{path:'login',component:LoginComponent},{path:'tabWeapon',component:TableauWeaponComponent},{path:'tabArmor',component:TableauArmorComponent},{path:'tabTalisman',component:TableauTalismanComponent},{path:'tabShield',component:TableauShieldComponent},{path:"api", component:TestComponent},{path:'signin',component:SignInComponent},{path:'test', component:TestComponent}, {path:"**",component:AccueilComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
