import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/storage';
// import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask }
//  from 'angularfire2/storage';



@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  // dropdownList = [];
  // i:Number;
  // selectedItem=[]
  // selectedItems = [];
   basePath:string = '/bookCovers';
  // imgUrl:String
  // ref:AngularFireStorageReference
  // task:AngularFireUploadTask

  dropdownSettings = {};
  constructor( private db:AngularFirestore,
    private router:Router) { }

  @ViewChild('f') addBookForm: NgForm;
 
  ngOnInit() {
//     this.dropdownList= [
//       { item_id: 1, item_text: "CS" },
//       { item_id: 2, item_text: "EC" },
//       { item_id: 3, item_text: 'FT' },
//       { item_id: 4, item_text: 'CHEMICAL' },
//       { item_id: 5, item_text: 'CIVIL' },
//       { item_id: 6, item_text: 'MECHANICAL' }

//       // 
  
//     ];
//     this.selectedItems=[ 
//   ];
//     this.dropdownSettings = {
//       singleSelection: false,
//       idField: 'item_id',
//       textField: 'item_text',
//       selectAllText: 'Select All',
//       unSelectAllText: 'UnSelect All',
//       itemsShowLimit: 8,
//       allowSearchFilter: true
//     };
//   }
//   onItemSelect(item: any) {
//    // console.log(item);
//  }
//   onSelectAll(items: any) {
//    // console.log(items);
  }
  myOptions=[
     { value:'cs', name: "CS"},
      {value: "ec", name: "EC"},
      {value: "ft", name: "FT"},
      {value: "cv", name: "CHEMICAL"},
      {value: "cm", name: "CIVIL"},
      {value: "me", name: "MECHANICAL"},
  ]
  addBook(value):Promise<firebase.firestore.DocumentReference>{
    return this.db.collection('Books').add({
      book_name:value.bookName,
      author_name:value.authorName,
      publisher_name:value.publisherName,
      semester:value.semester,
      book_prize:value.prize,
      branch:value.branch,
      pdf_link:value.pdf,
      img_link:value.imgLink,
      book_description:value.bookDescription,
      buy_link:value.buyLink
      
       })}
      //  uploadFile(){
      //      this.ref = this.afStorage
      //      .ref(`${this.basePath}/${this.addBookForm.value.book-name}`);
      //      this.task = this.ref.put(this.addBookForm.value.imgLink)
         
      //     this.task  .then((snapshot)=>{
      //      console.log(snapshot.downloadURL);

      //   });}
      //   //  let storageRef:AngularFireStorageReference  = this.afStorage.
      //   //  ref(`${this.basePath}/${this.addBookForm.value.book-name}`);
         
      //   //   storageRef.put(this.addBookForm.value.imgLink).then((snapshot)=>{
      //   //     this.imgUrl=snapshot.downloadURL;

      //   //   })
      //   // uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
           
      //     //   (error) => {
      //     //     // upload failed
      //     //     console.log(error)
      //     //   },
      //     //   () => {
      //     //     uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
      //     //       console.log('File available at', downloadURL);
      //     //       this.imgUrl = downloadURL;
      //      //     });
      //         // upload success
      //        // this.imgUrl = uploadTask.snapshot.downloadURL
      //       //  this.addBook(this.addBookForm.value) .then(
      //       //   res=>{
      //       //     console.log(res.id);
      //       //   this.router.navigate(['/signin'])
      //       //   }
      //       // )
      //       }
          
       
       

  onSubmit(){
    console.log(this.addBookForm.value)
  // this.uploadFile();
 // this.uploadFile();
  this.addBook(this.addBookForm.value) .then(
    res=>{
     // console.log(res.id);
    this.router.navigate(['/adminpanel'])
    }
  )
  // for(let i; i<this.selectedItems.length; i++ ) {
  //    for(let value of this.selectedItems[i]){
    
  //      this.selectedItem=value.item_text.item_text
  //    }}
  //   this.selectedItem=this.selectedItems.map(
  //     (e)=>{
  //         return e.data()
  //   })
 

}
}



