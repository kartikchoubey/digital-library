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

notLogin=false;
userDetail:{
  name:string,email:string,
  password:string
}

  constructor(private db:AngularFirestore,private router:Router) { }
  @ViewChild('f') signinForm: NgForm;

  ngOnInit() {
  }
  loginCheck(){
     return this.db.collection('users',ref=>ref.where('email','==',this.signinForm.value.email)
    .where('password','==',this.signinForm.value.password).limit(1)).snapshotChanges()
    
    
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
   
    this.loginCheck().subscribe(data=>{
      this.userList=data.map(e=>{
         return {
           id:e.payload.doc.id,
          userData: e.payload.doc.data()
         } 
          
        
          
      })
    //console.log(this.userList);
              
     if(this.userList.length ==1){
      this.userDetail= this.userList[0].userData;
      console.log(this.userDetail.name)
       this.router.navigate(['/home']);
     }else{
       this.notLogin=true
      }

    })
   
  } 
 
}
