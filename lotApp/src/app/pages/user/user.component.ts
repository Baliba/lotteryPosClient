import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { BaseComponent } from 'src/app/BaseComponent';
import { AppService } from 'src/app/_Services/app.service';
import { AuthenticationService } from 'src/app/_Services/Authentification.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends BaseComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              public app: AppService, ) {
    super();
  }
  lloading: any;
  cedit = false;
  cuser = {
   id: 0,
   username : '',
   password : '',
   lastName : '',
   firstName: '',
   sex: '',
   adress: '',
   phone: '',
   phone_b: '',
   email: '',
   supervisor: 0,
   tech: 0,
   paramgame: 0,
   pin: '',
   pvbank: 0,
   enabled: true,
   lock: true,
   role: ''
};
  user = {
   username : '',
   password : '',
   lastName : '',
   firstName: '',
   sex: '',
   adress: '',
   phone: '',
   phone_b: '',
   email: '',
   supervisor: 0,
   tech: 0,
   paramgame: 0,
   pin: '',
   pvbank: 0,
   enabled: true,
   lock: true,
   role: 0
};

users: any = [];

  config: any;

  ngOnInit(): void {
    this.setUser();
  }

   setUser(){
     this.app.getData(`${environment.apiUrl}setUser`)
      .pipe(first())
      .subscribe(
        (data) => {
        this.config = data;
        console.log(data);
       },
        (error) => {
        });
  }

  save(a: any){
    if (!this.lloading){
     this.lloading = true;
     this.app.setData(`${environment.apiUrl}addUser/${a.role}`, a)
      .pipe(first())
      .subscribe(
        (data: any) => {
            this.lloading = false;
            this.users.push(data);
            this.setAlertSuccess('success', 1);
            this.user = {
                        username : '',
                        password : '',
                        lastName : '',
                        firstName: '',
                        sex: '',
                        adress: '',
                        phone: '',
                        phone_b: '',
                        email: '',
                        supervisor: 0,
                        tech: 0,
                        paramgame: 0,
                        pin: '',
                        pvbank: 0,
                        enabled: true,
                        lock: true,
                        role: 0
                    };
        },
        (error) => {
             this.lloading = false;
             this.setAlertDanger(error, 1);
        });
      }
  }

  edit(o: any, i:number){


  }
 del(id:number, i:number){


  }


}
