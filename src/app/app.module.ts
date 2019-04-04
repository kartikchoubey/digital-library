import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { ContactComponent } from "./contact/contact.component";
import { AppRoutingModule } from "./app-routing.module";
import { QnaComponent } from "./qna/qna.component";
import { environment } from "src/environments/environment";
import { SigninAdminComponent } from "./signin-admin/signin-admin.component";
import { AddBookComponent } from "./add-book/add-book.component";
import { AdminpanelComponent } from "./adminpanel/adminpanel.component";
import { UpdateBookComponent } from "./update-book/update-book.component";

import { AppService } from "./app.service";
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";

import { UserPanelComponent } from "./user-panel/user-panel.component";
import { BookDetailComponent } from "./user-panel/book-detail/book-detail.component";

import { BookItemAdminComponent } from "./adminpanel/book-item-admin/book-item-admin.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    QnaComponent,
    SigninComponent,
    SignupComponent,
    ContactComponent,
    SigninAdminComponent,
    AddBookComponent,
    AdminpanelComponent,
    UpdateBookComponent,
    UserPanelComponent,
    BookDetailComponent,

    BookItemAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
