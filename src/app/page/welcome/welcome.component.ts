import { Component, OnInit } from '@angular/core';
// import Typed from 'typed.js' 
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  strings:Array<string>
  constructor() {
    this.strings = ['Innovate.', 'Grow.', 'Design.', 'Learn.', 'Build.', 'Create.'];
  }

  ngOnInit(): void {}

}
