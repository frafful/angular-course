import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds: number[] = [];
  evens: number[] = [];

  onNumberIncremented(incrementedNumber: number) {
    ((incrementedNumber % 2) > 0) ? this.odds.push(incrementedNumber) : this.evens.push(incrementedNumber);
  }
}
