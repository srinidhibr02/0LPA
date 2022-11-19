import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  constructor(
    private firestore:AngularFirestore
    ) { }

  async storeFeedback(formData:any){
    console.log(formData);
    Object.assign(formData,{'dateTime':new Date()})
    this.firestore.collection('ContactForm').add(formData);
  }
}
