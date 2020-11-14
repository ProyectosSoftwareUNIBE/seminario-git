import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ImgCaruselComponent } from './img-carusel/img-carusel.component';
import { DetailsComponent } from './details/details.component';
import { Details2Component } from './details2/details2.component';
import { Details3Component } from './details3/details3.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ImgCaruselComponent,
    DetailsComponent,
    Details2Component,
    Details3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
