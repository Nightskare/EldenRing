import { Injectable } from '@angular/core';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
  }
  async SignUp(email : string | null, password : string | null) {
    initializeApp({"projectId":"elden-guide-5faf0","appId":"1:188293991212:web:c5a961d841b2554ccafa89","storageBucket":"elden-guide-5faf0.appspot.com","apiKey":"AIzaSyCekxdDUYuvYkry3F0jOIz0BpaJeJA-1a8","authDomain":"elden-guide-5faf0.firebaseapp.com","messagingSenderId":"188293991212"});
    let auth = getAuth();
    email = email + "";
    password =  password + "";
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        window.alert('Compte créer avec succès!');
        console.log(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Sign in with email/password
  async SignIn(email : string | null, password : string | null) {
    initializeApp({"projectId":"elden-guide-5faf0","appId":"1:188293991212:web:c5a961d841b2554ccafa89","storageBucket":"elden-guide-5faf0.appspot.com","apiKey":"AIzaSyCekxdDUYuvYkry3F0jOIz0BpaJeJA-1a8","authDomain":"elden-guide-5faf0.firebaseapp.com","messagingSenderId":"188293991212"});
    let auth = getAuth();
    email = email + "";
    password =  password + "";
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
