import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['E-Commerce and Retail.', 'Finance and Banking.', 'Recruitment and HR.', 'Education and Learning.', 'Health and Fitness.'],
      typeSpeed: 100,
      backSpeed:100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    }
    const typed = new Typed('.changingText',options);
  }

}
