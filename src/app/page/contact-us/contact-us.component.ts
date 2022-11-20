import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms'
import { MailServiceService } from './mail-service.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  showAlert:boolean = false;
  contactForm!:FormGroup;

  constructor(
    private fb:FormBuilder,
    private mailService:MailServiceService
    ) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
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

  async submit(){
    // console.log(this.contactForm.value);
    setInterval(()=>{
      this.showAlert = false;
    }, 3000);
    await this.mailService.storeFeedback(this.contactForm.value);
    this.clearForm();
    this.showAlert = true;
  }

  clearForm(){
    this.contactForm.reset();
  }
}
