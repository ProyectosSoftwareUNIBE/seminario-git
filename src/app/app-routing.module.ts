import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '', component: MenuComponent,
    children: [
      { path: 'details', component: DetailsComponent }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
