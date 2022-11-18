import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js' 
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['Innovate.', 'Grow.', 'Design.', 'Learn.', 'Build.', 'Create.'],
      typeSpeed: 100,
      backSpeed:100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    }
    const typed = new Typed('.changingText',options);
  }

}
