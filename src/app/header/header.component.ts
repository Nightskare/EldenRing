import { Component } from '@angular/core';

import { AuthenticationService } from '../api/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public authenticationService: AuthenticationService) {}
  async logout(){
    this.authenticationService.SignOut();
  }

  isLogged(){
    return this.authenticationService.isLogged();
  }

  SignOut(){
    this.authenticationService.SignOut();
  }
}
