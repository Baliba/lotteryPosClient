import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { BaseComponent } from '../BaseComponent';
import { AppService } from '../_Services/app.service';
import { AuthenticationService } from '../_Services/Authentification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {
   constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    public app: AppService,
  ) {
     super();
     this.getLang();
    // redirect to home if already logged in
    const currentUser =   this.authenticationService.currentUserValue
     if (currentUser) {
        if (currentUser.role.name == 'MASTER' || currentUser.role.name == 'ADMIN' ) {
              this.router.navigate(['/ /home']);
          }  else if (currentUser.role.name === 'CLIENT' ) {
              this.router.navigate(['/game/home']);
        } 
       
    }
  }

   username = ''; password = '';
   returnUrl: any;
   show = false;

  msg = 'Wait a moment please';

  ngOnInit(): void {
   // this.setAlert('alert-info alert-login', 'Alert');
   this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/admin/home';
  }


   login() {
    this.loading[0] = true;
    this.authenticationService
      .login(this.username, this.password)
      .pipe(first())
      .subscribe(
        data => {
            this.loading[0] = false;
            if (!data.crash) {
               this.router.navigate([this.returnUrl]);
           } else {
            this.setAlert('alert-danger alert-login', data.message);
          }
        },
        error => {
          this.setAlert('alert-danger alert-login', error);
        }
      );
  }
getLang() {
   this.msg = 'Wait a moment please... \n Tann on ti tan...';
   this.app.getData(`${environment.apiUrl}bankAndLang`)
      .pipe(first())
      .subscribe(
        (data) => {
            sessionStorage.setItem('BANK', JSON.stringify(data.bank));
            sessionStorage.setItem('LG', JSON.stringify(data.lg));
            this.show = true;
            this.setBankAndLang();
            console.log(data);
        },
        (error) => {
         this.msg ="Please refresh this page... \n silvoplè rafrechi paj sa a...";
        });
  }
}
