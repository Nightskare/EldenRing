import { Injectable, inject } from '@angular/core';
import { Auth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private auth: Auth = inject(Auth);
  public email : string = "";
  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      if (user && user.email) {
        this.email = user.email;
      }
    });
  }
  async SignUp(email : string | null, password : string | null) {
    email = email + "";
    password =  password + "";
    return createUserWithEmailAndPassword(this.auth, email, password)
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
    email = email + "";
    password =  password + "";
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Sign out
  async SignOut() {
    return signOut(this.auth);
  }
  
  isLogged() {
    return this.auth.currentUser !== null;
  }
}
