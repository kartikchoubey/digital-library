import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore ,AngularFirestoreCollection,AngularFirestoreDocument}
 from '@angular/fire/firestore';
import { Book } from './book.model';
import { Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';
import { User } from 'user.model';

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnInit{
//bookDetail:Array<Book>
booksCollection:AngularFirestoreCollection<Book> ;
books:Observable<Book[]>
selectedBook:Book
selectedBookForUpdate:Book
book:number
bookid:String
loginUserData:User

  constructor(public db:AngularFirestore) { 
    
  }
  ngOnInit(){
   console.log(this.bookid);
  }
  getBookByBranch(value){
    this.books=this.db.collection('Books',ref=>ref.where('branch','==',value))
    .valueChanges();
    return this.books
  }
  getBookBySemester(value){
    this.books=this.db.collection('Books',ref=>ref.where('semester','==',value))
    .valueChanges();
    return this.books
  }
  getBookByBoth(branch:String,semester:number){
    this.books=this.db.collection('Books',ref=>ref.where('branch','==',branch).where('semester','==',semester)
    )
    .valueChanges();
    return this.books
  }
  getBookForUpdate(value:Book){
    this.selectedBookForUpdate=value;
  
  }
  getbookID(value:Book){
   return this.db.collection('Books',ref=>ref.where('book_name','==',value.book_name))
    .snapshotChanges()
  }
  
  getBook(){
    this.books=this.db.collection('Books').valueChanges()
   return this.books
  }
  getSelectedBook(value:Book){
  this.selectedBook=value
  }
  updateBook(book:Book){
    this.getbookID(book).subscribe(data=>{
      data.map(e=>{
          
           this.bookid=e.payload.doc.id
          
         
     });
    })
    this.db.doc(`/Books/${this.bookid}`).update(book);

  }
  
 
}
