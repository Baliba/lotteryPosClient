import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';
import { BaseComponent } from 'src/app/BaseComponent';
import { AppService } from 'src/app/_Services/app.service';
import { AuthenticationService } from 'src/app/_Services/Authentification.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-mode-games-ctrl',
  templateUrl: './mode-games-ctrl.component.html',
  styleUrls: ['./mode-games-ctrl.component.css']
})
export class ModeGamesCtrlComponent extends BaseComponent implements OnInit {

   constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              public app: AppService, ) {
    super();
  }

 ngOnInit() {
    this.getMGames();
  }

mgames:any;
getMGames() {
   this.app.getData(`${environment.apiUrl}modeGameMasters`)
      .pipe(first())
      .subscribe(
        (data) => {
            this.mgames = data._embedded.modeGameMasters;
        },
        (error) => {

        });
  }
}
