import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { Book } from '../book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
 
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
  constructor(private appService:AppService,public router:Router) { }
  bookData=this.appService.selectedBookForUpdate

  ngOnInit() {
 // console.log(this.bookData)
  }
  findId(){
    
  }
onSubmit(data){
 this.appService.updateBook(data);
  console.log(data)
     this.router.navigate(['/adminpanel']);

}
}
