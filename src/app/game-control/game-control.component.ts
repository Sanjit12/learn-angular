import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output()
  increment = new EventEmitter<{value: number}>();

  incrementValue: number = 0;

  timer: any;

  constructor() { }

  ngOnInit(): void {

  }
  
  /**
   * startGame
   */
  public startGame() {
    var app = this;
    this.timer = setInterval(function(){
      
      app.incrementValue += 1;

      app.increment.emit({
        value: app.incrementValue
      });

    }, 1000);
  }

 /**
  * stopGame
  */
 public stopGame() {
   clearInterval(this.timer);
 }
}
