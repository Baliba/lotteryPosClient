import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { BaseComponent } from 'src/app/BaseComponent';
import { AppService } from 'src/app/_Services/app.service';
import { AuthenticationService } from 'src/app/_Services/Authentification.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-pv',
  templateUrl: './pv.component.html',
  styleUrls: ['./pv.component.css']
})
export class PvComponent extends BaseComponent implements OnInit {
   constructor(private route: ActivatedRoute,
               private router: Router,
               private authenticationService: AuthenticationService,
               public app: AppService, ) {
    super();
  }
   lloading: any;
   cedit: any;
   public cbank = {
    id: 0,
    nom: '',
    adress: '',
    phone: '',
    phone_b: '',
    email: ''
  };

   public bank = {
    nom: '',
    adress: '',
    phone: '',
    phone_b: '',
    email: ''
  };
  banks : any = [];
  pos: number | undefined;


  ngOnInit(): void {
    this.getBank();
  }
    save(a: any){
    if (!this.lloading){
     this.lloading = true;
     this.app.setData(`${environment.apiUrl}pVBanks`,a)
      .pipe(first())
      .subscribe(
        (data:any) => {
            this.lloading = false;
            this.banks.push(data);
            this.setAlertSuccess('success', 1);
            this.bank = {
                      nom: '',
                      adress: '',
                      phone: '',
                      phone_b: '',
                      email: ''
                    };
        },
        (error) => {
             this.lloading = false;
             this.setAlertDanger(error, 1);
        });
      }
  }

  // tslint:disable-next-line:typedef
  getBank(){
     this.app.getData(`${environment.apiUrl}pVBanks`)
      .pipe(first())
      .subscribe(
        (data) => {
            this.banks = data._embedded.pVBanks;
       },
        (error) => {
        });
  }

   // tslint:disable-next-line:typedef
   edit(e: any, i: number){
    this.cbank = e;
    this.pos = i;
    this.cedit = true;
  }

 // tslint:disable-next-line:typedef
 close(){
  this.cbank =  {
    id: 0,
    nom: '',
    adress: '',
    phone: '',
    phone_b: '',
    email: ''
  };
    this.pos = -1;
    this.cedit = false;
  }

  del(id: number, i: any){
    if (!this.loading[i] && confirm('Are you sure you want to delete it? ')){
     this.loading[i] = true;
     this.app.delData(`${environment.apiUrl}pVBanks/${id}`)
      .pipe(first())
      .subscribe(
        (data) => {
           this.banks.splice(i, 1);
           this.loading[i] = false;
        },
        (error) => {
             this.loading[i] = false;
        });
      }
  }

   editBank(data: any){
    if (!this.lloading){
     this.lloading = true;
     this.app.editData(`${environment.apiUrl}pVBanks/${data.id}`, data)
      .pipe(first())
      .subscribe(
        (data) => {
            this.lloading = false;
            this.setAlertSuccess('success', 2);
        },
        (error) => {
             this.lloading = false;
             this.setAlertDanger(error, 2);
        });
      }
  }



}
