import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/book.model';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
book=this.appService.selectedBook;
  constructor(private appService:AppService) { }
pdf_link=true
  ngOnInit() {
   console.log(this.book)
  }
pdfLink(){
  if(this.book.pdf_link=="none"){
      this.pdf_link=false
}
}
}
