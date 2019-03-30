import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QnaComponent } from './qna/qna.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { BuybooksComponent } from './buybooks/buybooks.component';
import { SellbooksComponent } from './sellbooks/sellbooks.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'qna', component: QnaComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'buybooks', component: BuybooksComponent },
    { path: 'sellbooks', component: SellbooksComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}