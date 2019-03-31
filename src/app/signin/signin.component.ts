import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, QueryDocumentSnapshot, AngularFirestoreDocument } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
userList:Array<any>

  constructor(private db:AngularFirestore,private router:Router) { }
  @ViewChild('f') signinForm: NgForm;

  ngOnInit() {
  }
  loginCheck(){
     return this.db.collection('users',ref=>ref.where('email','==',this.signinForm.value.email)
    .where('password','==',this.signinForm.value.password).limit(1)).get()
    
    
    // .then(function(doc) {
    //   if (doc.exists) {
    //       console.log("Document data:", doc.data());
    //       this.router.navigate(['/home'])
    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log("No such document!");
    //   }})
  }
  onSubmit(){
   // console.log(this.signinForm)
    this.loginCheck().subscribe(result=>{
      this.userList=result.docs;
    console.log(result.docs);
    if(this.userList.length == 1){
      this.router.navigate(['/home']);
    }

    })
  } 
  
}
