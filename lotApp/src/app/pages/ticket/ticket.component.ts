import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/_Services/app.service';
import { environment } from 'src/environments/environment.prod';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  id_tiraj:any;
  tickets: any;
  constructor(
    private router: Router,
    public app: AppService,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
        this.id_tiraj = this.route.snapshot.params.id;
  }

  getAllTicket(){
     this.app.getData(`${environment.apiUrl}tiraj/getGetTicketsByDraw`)
      .pipe(first())
      .subscribe(
        (data) => {
          this.tickets = data;
        },
        (error) => {}
      );
  }

}
