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

  constructor(public db:AngularFirestore) { 
    
  }
  ngOnInit(){
   
  }
  
  getBook(){
    this.books=this.db.collection('Books').valueChanges()
   return this.books
  }
 
}
