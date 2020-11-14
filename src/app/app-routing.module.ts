import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ListComponent} from './list/list.component';
import {ItemComponent} from './item/item.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: ListComponent.URL, component: ListComponent},
  {path: ItemComponent.URL, component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
