import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor( 
    private router:Router,private db:AngularFirestore) { }

  ngOnInit() {
  }

  @ViewChild('f') signupForm: NgForm;
  createUser(value):Promise<firebase.firestore.DocumentReference>{
    return this.db.collection('users').add({
      name: value.name,
      email: value.email,
      password: value.password,
      isAdmin:"N"
       });}

  onSubmit() {
  this.createUser(this.signupForm.value)
     .then(
      res=>{
      this.router.navigate(['/signin'])
      }
    )
      console.log(this.signupForm.value) 
  }

}
