
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './shared/component/alert.component';
import { AuthGuard } from './shared/auth/index';

import {AlertService,
        AuthenticationService,
        UserService } from './shared/service/index';

import { RegisterComponent } from './register/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';


@NgModule({

  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    NgbModule.forRoot(),
    routing
  ],

  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService

  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
