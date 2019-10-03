import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  auth: any;

  constructor(auth: AuthenticationService)
  {

    this.auth = auth;
  }

  ngOnInit() {
  }

  DeleteTokenTrue()
  {
    console.log("Borrando la palabra magica");
    this.auth.setTokenFalse();
  }

}
