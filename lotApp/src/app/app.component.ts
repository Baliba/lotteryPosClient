import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_Services/Authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'lotApp';
    user:any | undefined;
    constructor( private router: Router,  private authenticationService: AuthenticationService ) {
    this.user = this.authenticationService.currentUserValue;
  }
}
