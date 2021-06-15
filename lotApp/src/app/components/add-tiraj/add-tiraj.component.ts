import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/_Services/app.service';
import { AuthenticationService } from 'src/app/_Services/Authentification.service';
import { environment } from 'src/environments/environment.prod';
import { first } from 'rxjs/operators';
import { BaseComponent } from 'src/app/BaseComponent';
import { Tiraj } from 'src/app/_model/tiraj';
import { AppResponse } from 'src/app/Response/AppResponse';

@Component({
  selector: 'app-add-tiraj',
  templateUrl: './add-tiraj.component.html',
  styleUrls: ['./add-tiraj.component.css']
})
export class AddTirajComponent extends BaseComponent implements OnInit {
  games: any  = [];
  user: any;
  ht: any;
  dt: any;
  public  tire: any = 0;
  cgame: any; 
  lot_1: any;
  lot_2: any;
  lot_3: any;
  lot_4: any;
  public ftiraj: Tiraj | undefined;
  tiraj = { game: {}, dateg: '', timeg: '', num3: '', win4: '' };

  constructor(public app: AppService, private auth: AuthenticationService) {
    super();
    this.user = this.auth.currentUserValue;
   }
  ngOnInit() {
    this.now();
    this.getGames();

  }

  changeGame(){
    this.ht = this.cgame.hour_draw;
  }

  reset(){
     this.tire = 0;
     this.lot_1 = '';
     this.lot_2 = '';
     this.lot_3 = '';
     this.lot_4 = '';
  }

  getGames() {
    this.app
      .getData(`${environment.apiUrl}getGames`)
      .pipe(first())
      .subscribe(
        (data) => {
          this.games = data;
          console.log(this.games);
        },
        (error) => {}
      );
  }
  now() {
    this.app
      .getData(`${environment.apiUrl}now`)
      .pipe(first())
      .subscribe(
        (data) => {
           this.dt = data.data;
           console.log(data.data);
        },
        (error) => {
          console.log('error' + error);
        }
      );
  }


   addTiraj() {
   if (!this.loading[0]){
      if (this.lot_1 === this.lot_3 && this.lot_2 === this.lot_4 ) {
      this.loading[0] = true;
      this.tiraj.game =       this.cgame;
      this.tiraj.num3    =    this.lot_1;
      this.tiraj.win4    =    this.lot_2;
      this.tiraj.dateg   =    this.dt;
      this.tiraj.timeg   =    this.ht;
      this.closeAlert();
      this.app
        .setData(`${environment.apiUrl}tiraj/add`, this.tiraj)
        .pipe(first())
        .subscribe(
            (data: AppResponse<Tiraj>) => {
            const tcss = 'alert-danger alert-login';
            if (!data.crash){
              this.tire = 3;
              this.ftiraj = data.data;
              const tcss = 'alert-info alert-login';
            } else {
               this.setAlert(tcss, data.message, 100);
            }
            this.loading[0] = false;
          }, (error) => {
            this.setAlert('alert-danger alert-login', error, 100);
            this.tire = 0;
            this.loading[0] = false;
          }
        );
       } else {
           this.setAlertDanger( 'Boul yo pa menm rekomanse anko', 100 );
           this.tire = 0;
           this.lot_3 = '';
           this.lot_4 = '';
      }

}

}



}
