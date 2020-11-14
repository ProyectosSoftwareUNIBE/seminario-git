import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import { Details2Component } from './details2/details2.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '', component: MenuComponent,
    children: [
      { path: 'details', component: Details2Component },
      { path: 'details/:id', component: DetailsComponent }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
