import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userName = "";
  registerButtonEnabled = false;
  registrationStatus = "";

  constructor() { 
    this.registerButtonEnabled = false;
  }

  ngOnInit(): void {
  }

  onTyping(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
    this.registerButtonEnabled = this.userName.length > 3;
  }

  registerUser(){
    this.registrationStatus = `User ${this.userName} was successfully registerd!`;
    this.userName = "";
  }
}
