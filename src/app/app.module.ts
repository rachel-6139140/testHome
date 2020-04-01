import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SecureComponent } from './secure/secure.component';
import { NewPostComponent } from './new-post/new-post.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule }   from '@angular/forms';
import {MatFormFieldModule, MatToolbarModule, MatInputModule,MatButtonModule,MatGridListModule,MatSelectModule,MatCardModule } from '@angular/material';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SecureComponent,
    NewPostComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
