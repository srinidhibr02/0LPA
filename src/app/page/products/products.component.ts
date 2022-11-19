import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:Array<Object> = [
    {
      name:'Bellwoods',
      img:'../../../assets/Products/redBellTranparentLogo.png',
      desc:`BellWoods is a furniture seller store. It provides good quality, luxurious and affordable
      products of furniture. Also there's an option for customization on needs.`,
      status:'Completed'
    },
    {
      name:'Pinder',
      img:'../../../assets/Products/pinderLogo1.png',
      desc:`Basically it's a Tinder for pets. It is obvious to find a mating patner for your pets.
      Pinder will get you covered in search of any needs your pet needs.`,
      status:'Ongoing'
    },
    {
      name:'Travelogram',
      img:'../../../assets/Products/foodietraveler.png',
      desc:`Food Pin is a social media platform where one can share thoughts on unexplored or explored
      tourist destinations and foods in local areas as a part of touring.`
    }
  ];
  
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
