import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ImgCaruselComponent} from './img-carusel/img-carusel.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'carousel', component: ImgCaruselComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
