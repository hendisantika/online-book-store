import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./admin/users/users.component";
import {BooksComponent} from "./admin/books/books.component";

const routes: Routes = [
  {path: 'admin/users', component: UsersComponent},
  {path: 'admin/books', component: BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
