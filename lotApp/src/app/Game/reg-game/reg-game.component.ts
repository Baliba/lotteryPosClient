import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { BaseComponent } from '../../BaseComponent';
import { AppService } from '../../_Services/app.service';
import { AuthenticationService } from '../../_Services/Authentification.service';

@Component({
  selector: 'app-reg-game',
  templateUrl: './reg-game.component.html',
  styleUrls: ['./reg-game.component.css']
})
export class RegGameComponent extends BaseComponent  implements OnInit {
  creds = {
   username:"",
   email:"",
   pass_1:"",
   pass_2:"" ,
   password:"",
   lastName:"",
   firstName:''
  };
  public returnUrl: any;

    constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthenticationService,
    public app: AppService,
  ) {
     super();
    // redirect to home if already logged in
     if (this.auth.currentUserValue) {
        this.router.navigate(['/game/home']);
     }
  }

  ngOnInit(): void {
     this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/game/home';
  }

  checkReg(){
  let reg = true;
  var emailCheck=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
     if(!emailCheck.test(this.creds.email)){
        this.setAlert('alert-danger alert-login',"Imel la pa bon");
        reg = false;
     }
     if(this.creds.pass_1.length<=3){
        this.setAlert('alert-danger alert-login',"Kòd sekrè an dwe plis ke 3 karaktè");
        reg = false;
     }
    if(this.creds.pass_1!=this.creds.pass_1){
        this.setAlert('alert-danger alert-login',"Kòd sekrè yo pa menm");
        reg = false;
    }
    if(this.creds.username.length!=8 && this.creds.username.length!=11){
        this.setAlert('alert-danger alert-login',"Nimero an pa bon");
        reg = false;
    }
    if(this.creds.username.length==8){
      this.creds.username="509"+this.creds.username;
    }
    if(reg){
     this.register();
    }
  }


  register(){
      this.loading[0] = true;
      this.creds.password = this.creds.pass_1;
      this.app.setData(`${environment.apiUrl}register`, this.creds)
      .pipe(first())
      .subscribe(
        (data:any) => {
            this.loading[0] = false;
            if (!data.crash) {
               this.auth.setUserData(data.data);
               this.router.navigate([this.returnUrl]);
           } else {
            this.setAlert('alert-danger alert-login', data.message);
          }
        },
        (error:any) => {
            this.loading[0] = false;
            this.setAlert('alert-danger alert-login', error);
        }
      );
  }

}
