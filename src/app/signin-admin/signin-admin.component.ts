import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-admin',
  templateUrl: './signin-admin.component.html',
  styleUrls: ['./signin-admin.component.css']
})
export class SigninAdminComponent implements OnInit {
 
  @ViewChild('f') adminForm: NgForm;
  constructor( private db:AngularFirestore,private router:Router) { }
   notAdmin=false;
  adminList:Array<any>
 adminDetail:{
    name:string,email:string,
    password:string
  }
  ngOnInit() {
  }
  adminCheck(){
    return this.db.collection('users',ref=>ref.where('email','==',this.adminForm.value.email)
    .where('password','==',this.adminForm.value.password).where('isAdmin',"==","Y").limit(1)).snapshotChanges()
  }
  onSubmit(){
   
    this.adminCheck().subscribe(data=>{
      this.adminList=data.map(e=>{
         return {
           id:e.payload.doc.id,
          userData: e.payload.doc.data()
         } 
          
        
          
      })
    //console.log(this.userList);
              
     if(this.adminList.length ==1){
      this.adminDetail= this.adminList[0].userData;
      console.log(this.adminList)
       this.router.navigate(['/adminpanel']);
     }else{
       this.notAdmin=true
      }

    })
   
  } 

}
