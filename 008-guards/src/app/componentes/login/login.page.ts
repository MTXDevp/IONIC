import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  auth: any;

  constructor(auth: AuthenticationService)
  {
   this.auth = auth;
  }

  ngOnInit() {
  }
  PonerTokenTrue()
  {
    console.log("Poniendo la palabra magica");
    this.auth.setTokenTrue();
  }

  DeleteTokenTrue()
  {
    console.log("Borrando la palabra magica");
    this.auth.setTokenFalse();
  }
}
