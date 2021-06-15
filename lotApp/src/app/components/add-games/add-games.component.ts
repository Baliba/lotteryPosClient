import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { BaseComponent } from 'src/app/BaseComponent';
import { AppService } from 'src/app/_Services/app.service';
import { AuthenticationService } from 'src/app/_Services/Authentification.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-add-games',
  templateUrl: './add-games.component.html',
  styleUrls: ['./add-games.component.css']
})
export class AddGamesComponent extends BaseComponent implements OnInit {
  game = { no: '', code: '', hour_draw: '', hour_to_block: '', hour_to_start_sell: '', delai: ''} ;
  loading: any = false;
   @Output()
   addGameMaster = new EventEmitter();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              public app: AppService, ) {
    super();
  }

  ngOnInit(): void {
  }

  addGame(data: any){
       if (!this.loading){
     this.loading = true;
     this.game.hour_draw = this.game.hour_draw+':00';
     this.game.hour_to_block = this.game.hour_to_block +':00';
     this.game.hour_to_start_sell = this.game.hour_to_start_sell +':00';
     this.app.setData(`${environment.apiUrl}gameMasters`, data)
      .pipe(first())
      .subscribe(
        (data) => {
            this.loading = false;
            this.setAlertSuccess('success', 1);
            this.addGameMaster.emit({game: data, state: true});
            this.game = { no: '', code: '', hour_draw: '', hour_to_block: '', hour_to_start_sell: '', delai: ''} ;
        },
        (error) => {
             this.loading = false;
             this.setAlertDanger(error, 1);
        });
      }
  }

}
