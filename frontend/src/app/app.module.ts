import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {UsersComponent} from './admin/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {AdduserComponent} from './admin/users/adduser/adduser.component';
import {FormsModule} from "@angular/forms";
import {ViewuserComponent} from './admin/users/viewuser/viewuser.component';
import {BooksComponent} from './admin/books/books.component';
import {AddbookComponent} from './admin/books/addbook/addbook.component';
import {ViewbookComponent} from './admin/books/viewbook/viewbook.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    BooksComponent,
    AddbookComponent,
    ViewbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
