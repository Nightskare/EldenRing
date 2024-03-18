import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthPageComponent } from './auth-page/auth-page.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"elden-guide-5faf0","appId":"1:188293991212:web:c5a961d841b2554ccafa89","storageBucket":"elden-guide-5faf0.appspot.com","apiKey":"AIzaSyCekxdDUYuvYkry3F0jOIz0BpaJeJA-1a8","authDomain":"elden-guide-5faf0.firebaseapp.com","messagingSenderId":"188293991212"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

