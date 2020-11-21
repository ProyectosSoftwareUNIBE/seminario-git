import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ListComponent} from './list/list.component';
import {ItemComponent} from './item/item.component';

import {AuthService} from './services/auth.service';
import {NewsService} from './services/news.service';
import {UserFirebaseService} from './services/user-firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [
    AuthService,
    NewsService,
    UserFirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
