import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore ,AngularFirestoreCollection,AngularFirestoreDocument}
 from '@angular/fire/firestore';
import { Book } from './book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnInit{
//bookDetail:Array<Book>
booksCollection:AngularFirestoreCollection<Book> ;
books:Observable<Book[]>
selectedBook:Book

  constructor(public db:AngularFirestore) { 
    
  }
  ngOnInit(){
   
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
  
  getBook(){
    this.books=this.db.collection('Books').valueChanges()
   return this.books
  }
  getSelectedBook(value:Book){
  this.selectedBook=value
  }
 
}
