import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppService } from '../app.service';
import { Book } from '../book.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  @ViewChild('f') filterBookForm: NgForm;

  BookDetail:Book[]
  constructor(private db:AngularFirestore ,private appService:AppService) { }
  myOption=[
   { option:'CS',value:'cs'},
   { option:'EC',value:'ec'},
   { option:'EX',value:'ex'},
   { option:'ME',value:'me'},
   { option:'FT',value:'ft'},
   { option:'CM',value:'cm'}
  ]
  semester=[
    { option:'1',value:'1'},
    { option:'2',value:'2'},
    { option:'3',value:'3'},
    { option:'4',value:'4'},
    { option:'5',value:'5'},
    { option:'6',value:'6'},
    { option:'7',value:'7'},
    { option:'8',value:'8'},

   ]

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
     // getBookBYBranch(){
           
      
      onSubmit(){
        console.log(this.filterBookForm.value)
        console.log(parseInt(this.filterBookForm.value.semester))

        if(this.filterBookForm.value.branchOption && !this.filterBookForm.value.semester){
           this.appService.getBookByBranch(this.filterBookForm.value.branchOption)
           .subscribe(books =>{
            console.log(books)
           this.BookDetail=books;
          })
        }
        else if(this.filterBookForm.value.semester && !this.filterBookForm.value.branchOption){
          this.appService.getBookBySemester(parseInt(this.filterBookForm.value.semester))
          .subscribe(books =>{
           console.log(books)
          this.BookDetail=books;
         })
       }
       else if(this.filterBookForm.value.semester && this.filterBookForm.value.branchOption ){
         let semester=parseInt(this.filterBookForm.value.semester)
        
        this.appService.getBookByBoth(this.filterBookForm.value.branchOption ,semester)
        .subscribe(books =>{
         console.log(books)
        this.BookDetail=books;
       })
     }
      }


}
