import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common/header/header.component";
import { RentalComponent } from "./rental/rental.component";

import { RentalModule } from "./rental/rental.module";
import { AuthModule } from "./auth/auth.module";
import { ManageModule } from "./manage/manage.module";
import { UserModule } from "./user/user.module";

//Home
import { ListingsComponent } from "./common/components/main/listings.component";
import { RentalListItemComponent } from "./rental/rental-list-item/rental-list-item.component";

const routes: Routes = [
  { path: "", component: ListingsComponent },
  { path: "rentals", component: RentalComponent },
  // {path: '', redirectTo: '/rentals', pathMatch: 'full'}
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, ListingsComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RentalModule,
    AuthModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ManageModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}