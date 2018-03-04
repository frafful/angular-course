import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.css']
})
export class TogglerComponent implements OnInit {
  showDetails = false;
  logs = [];

  constructor() { } 

  ngOnInit() {
  }

  onDisplayDetailsClick() {
    this.showDetails = !this.showDetails;
    this.logs.push(this.logs.length + 1);
  }

  getBackgroundColor() {
    return this.logs.length >= 5 ? 'blue' : 'white';
  }

}
