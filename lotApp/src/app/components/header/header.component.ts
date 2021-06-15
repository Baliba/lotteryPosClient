import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/_Services/app.service';
import { AuthenticationService } from 'src/app/_Services/Authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private app: AppService
  ) {
     this.user = this.authenticationService.currentUserValue;
 }

  ngOnInit(): void {
  }

 async  logout() {
  await  this.authenticationService.logout();
  this.router.navigate(["/admin/login"]);
  }

}
