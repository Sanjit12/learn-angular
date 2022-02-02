import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styles: [`
    p{
      padding: 20px;
      background-color: mistyrose;
      border: 1px solid green;
    }
  `]
})
export class SuccessMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
