import { Component, OnInit, Input } from '@angular/core';
import { Tiraj } from 'src/app/_model/tiraj';
import { BaseComponent } from 'src/app/BaseComponent';

@Component({
  selector: 'app-tiraj',
  templateUrl: './tiraj.component.html',
  styleUrls: ['./tiraj.component.css']
})
export class TirajComponent extends BaseComponent implements OnInit {
  @Input()
  tiraj!: Tiraj;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
