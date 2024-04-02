import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthenticationService } from './api/authentication.service';
import { SignInOrLogInComponent } from './sign-in-or-log-in/sign-in-or-log-in.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BuildComponent } from './build/build.component';
import { StatComponent } from './stat/stat.component';
import { CharacterComponent } from './character/character.component';
import { ListItemComponent } from './list-item/list-item.component';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule} from '@angular/material/table';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TableauWeaponComponent } from './tableau-weapon/tableau-weapon.component';
import { TableauShieldComponent } from './tableau-shield/tableau-shield.component';
import { TableauArmorComponent } from './tableau-armor/tableau-armor.component';
import { TableauTalismanComponent } from './tableau-talisman/tableau-talisman.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInOrLogInComponent,
    SignInComponent,
    BuildComponent,
    StatComponent,
    CharacterComponent,
    ListItemComponent,
    TestComponent,
    AccueilComponent,
    SignInComponent,
    HeaderComponent,
    TableauWeaponComponent,
    TableauShieldComponent,
    TableauArmorComponent,
    TableauTalismanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"elden-guide-5faf0","appId":"1:188293991212:web:c5a961d841b2554ccafa89","storageBucket":"elden-guide-5faf0.appspot.com","apiKey":"AIzaSyCekxdDUYuvYkry3F0jOIz0BpaJeJA-1a8","authDomain":"elden-guide-5faf0.firebaseapp.com","messagingSenderId":"188293991212"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSelectModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule
  ],
  providers: [
    provideAnimationsAsync(),
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
