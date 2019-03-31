import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule } from '@angular/fire'
import {AngularFirestoreModule } from '@angular/fire/firestore'



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { QnaComponent } from './qna/qna.component';
import { BuybooksComponent } from './buybooks/buybooks.component';
import { SellbooksComponent } from './sellbooks/sellbooks.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    QnaComponent,
    SigninComponent,
    SignupComponent,
    ContactComponent,
    BuybooksComponent,
    SellbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
