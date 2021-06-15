import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { BaseComponent } from 'src/app/BaseComponent';
import { AppService } from 'src/app/_Services/app.service';
import { AuthenticationService } from 'src/app/_Services/Authentification.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-games',
  templateUrl: './edit-games.component.html',
  styleUrls: ['./edit-games.component.css']
})
export class EditGamesComponent extends BaseComponent implements OnInit {
  @Input()
  game:any;
  @Input()
  index:any;

  // tslint:disable-next-line:no-output-rename
  @Output()
  editGameMaster = new EventEmitter();
  @Output()
  closeEditGameMaster = new EventEmitter()

  loading:any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              public app: AppService, ) {
    super();
  }

  ngOnInit(): void {
  }
 editGame(i:any){
   if(!this.loading[i]){
     this.loading[i]= true;
     const sdata = this.game;
     this.app.editData(`${environment.apiUrl}gameMasters/${this.game.id}`, sdata)
      .pipe(first())
      .subscribe(
        (data) => {
             this.setAlertSuccess("Success",1);
            this.editGameMaster.emit({game:data, index:i, state:true});
        },
        (error) => {
             this.loading[i] = false;
             this.setAlert('alert-danger alert-login', error);
        });
      }
  }

  close(){
     this.closeEditGameMaster.emit({game:null, index:null, state:false});
  }
}
