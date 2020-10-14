import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShebaoComponent} from './components/shebao/shebao.component';
import {HomeComponent} from "./component/home/home.component";

const routes: Routes = [
  {path: 'shebao', component: ShebaoComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
