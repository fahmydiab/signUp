import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './account/signup/signup.component';
import { AlertService } from './services/alert.service';
import { AccountService } from './services/account.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './account/home/home.component';
import { LoginComponent } from './account/login/login.component';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signup', component: SignupComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AccountService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
