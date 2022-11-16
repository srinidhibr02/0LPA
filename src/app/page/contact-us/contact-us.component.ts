import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms'
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name:['',[
        Validators.required,
      ]],
      phno:['',[
        Validators.required,
      ]],
      email:['',[
        Validators.required,
        Validators.email
      ]],
      message:['',[
        Validators.required
      ]],
      agree:['',[
        Validators.requiredTrue
      ]]
    })
    // this.contactForm.valueChanges.subscribe(console.log);
  }
  get email(){
    return this.contactForm.get('email');
  }
  get name(){
    return this.contactForm.get('name');
  }
  get message(){
    return this.contactForm.get('message');
  }
  get phone(){
    return this.contactForm.get('phno');
  }
  get agree(){
    return this.contactForm.get('agree');
  }
}
