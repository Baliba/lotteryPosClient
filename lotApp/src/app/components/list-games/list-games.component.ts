import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { BaseComponent } from 'src/app/BaseComponent';
import { AppService } from 'src/app/_Services/app.service';
import { AuthenticationService } from 'src/app/_Services/Authentification.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent extends BaseComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              public app: AppService, ) {
    super();
  }

  // tslint:disable-next-line:no-output-rename
  @Output('updateGame')
  editGameMaster = new EventEmitter();

  editview = false;

  games: any;

  loading!: boolean[];
  game: any;
  index: any;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getGames();
  }


getGames() {
   this.app.getData(`${environment.apiUrl}gameMasters`)
      .pipe(first())
      .subscribe(
        (data) => {
            this.games = data._embedded.gameMasters;

        },
        (error) => {

        });
  }

  edGame(id: number, d: any, i: number){
    if (!this.loading[i]){
     this.loading[i] = true;
     const sdata = {enabled: d};
     this.app.editData(`${environment.apiUrl}gameMasters/${id}`, sdata)
      .pipe(first())
      .subscribe(
        (data) => {
            this.loading[i] = false;
            this.games[i].enabled = d;
        },
        (error) => {
             this.loading[i] = false;
        });
      }
  }
  edit(game: any  , i: number){
     this.editview = true;
     this.game = game;
     this.index = i;

  }

  editGameMasterEvent(e: any) {
    if (e.state){
     this.games[e.index] = e.game;
    }
  }

   // tslint:disable-next-line:typedef
   addGameMasterEvent(e: any) {
    if (e.state){
     this.games.push(e.game);
    }
  }

  closeEdit(){
    this.editview = false;
  }

  del(id: number, i: any){
    if (!this.loading[i] && confirm('Are you sure you want to delete it? ')){
     this.loading[i] = true;
     this.app.delData(`${environment.apiUrl}gameMasters/${id}`)
      .pipe(first())
      .subscribe(
        (data) => {
           console.log(i);
           this.games.splice(i,1);
           this.loading[i] = false;

        },
        (error) => {
             this.loading[i] = false;
        });
      }
  }

}
