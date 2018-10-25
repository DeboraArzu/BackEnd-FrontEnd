import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { StorageServiceModule } from 'angular-webstorage-service';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ClothesComponent } from './clothes/clothes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewItemComponent } from './new-item/new-item.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClothesComponent,
    NavbarComponent,
    NewItemComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StorageServiceModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
