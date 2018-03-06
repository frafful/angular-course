import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberIncremented = new EventEmitter<number>();

  private count = 0;
  private intervalTimer = null;

  constructor() { }

  ngOnInit() {
  }

  onGameStarted() {
    this.intervalTimer = setInterval(() => {
      this.numberIncremented.emit(this.count++);
    } , 1000);
  }

  onGameStopped() {
    clearInterval(this.intervalTimer);
  }
}
