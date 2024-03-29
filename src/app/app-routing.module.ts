import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QnaComponent } from './qna/qna.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { SigninAdminComponent } from './signin-admin/signin-admin.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { BookDetailComponent } from './user-panel/book-detail/book-detail.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'qna', component: QnaComponent },
    { path: 'adminsignin', component: SigninAdminComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'adminpanel', component: AdminpanelComponent },
    { path: 'userpanel', component: UserPanelComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'addbook', component: AddBookComponent },
    { path: 'updatebook', component: UpdateBookComponent },
    { path: 'bookdetail', component: BookDetailComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}