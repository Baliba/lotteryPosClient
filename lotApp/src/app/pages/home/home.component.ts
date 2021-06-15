import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/_Services/app.service';
import { AuthenticationService } from 'src/app/_Services/Authentification.service';
import { environment } from 'src/environments/environment.prod';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tirajs:any;
  htirajs:any;
  constructor(public app: AppService, private auth: AuthenticationService) { }

  ngOnInit(): void {
     this.getDrawsOfTheDay();
     this.getDrawsOfYDay()
    }

 getDrawsOfTheDay() {
    this.app.getData(`${environment.apiUrl}tiraj/getDrawsOfTheDay`)
      .pipe(first())
      .subscribe(
        (data) => {
          this.tirajs = data;
        },
        (error) => {}
      );
  }

   getDrawsOfYDay() {
    this.app.getData(`${environment.apiUrl}tiraj/getDrawYDay`)
      .pipe(first())
      .subscribe(
        (data) => {
          this.htirajs = data;
          console.log(data);
        },
        (error) => {}
      );
  }

}
