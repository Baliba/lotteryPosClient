import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { BaseComponent } from 'src/app/BaseComponent';
import { AppService } from 'src/app/_Services/app.service';
import { AuthenticationService } from 'src/app/_Services/Authentification.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent extends BaseComponent implements OnInit {

  public   bank = {
    id: 0,
    nom: '',
    adress: '',
    phone: '',
    phone_b: '',
    token: '',
    email: '',
    dateTimeFormat: '',
    fuseau_horaire: '',
    slogan: '',
    lang: 0
  };
   constructor(private route: ActivatedRoute,
               private router: Router,
               private authenticationService: AuthenticationService,
               public app: AppService, ) {
    super();
  }


  ngOnInit(): void {
    this.getConfig();
  }

  // tslint:disable-next-line:typedef
  getConfig(){

     this.app.getData(`${environment.apiUrl}banks`)
      .pipe(first())
      .subscribe(
        (data) => {
            this.bank = data._embedded.banks[0];
       },
        (error) => {
        });
  }

 // tslint:disable-next-line:typedef
 save(){
     this.app.editData(`${environment.apiUrl}banks/${this.bank.id}`,this.bank)
      .pipe(first())
      .subscribe(
        (data) => {
            this.setAlertSuccess('success', 1);
            this.bank = data._embedded.banks[0];
       },
       (error) => {
         this.setAlertDanger(error, 1);
        });
  }

}
