import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppService } from '../app.service';
import { Book } from '../book.model';
import { generateExpandoInstructionBlock } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  BookDetail:Book[]
  constructor(private db:AngularFirestore ,private appService:AppService) { }


  ngOnInit() {
   
      this.appService.getBook().subscribe(books =>{
        console.log(books)
       this.BookDetail=books;
      })
    
    
      }
   
      getBook(value:Object){
        console.log(value)
       this.appService.getSelectedBook(value);
      }


}
