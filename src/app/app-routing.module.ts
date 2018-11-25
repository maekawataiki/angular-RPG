import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'title', pathMatch: 'full' },
  { path: 'title', loadChildren: "./title/title.module#TitleModule" },
  { path: '**', redirectTo: 'title' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
