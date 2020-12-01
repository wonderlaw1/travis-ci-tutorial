import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { Cmp3Component } from './cmp3/cmp3.component';

const routes: Routes = [
  {
    path: 'page1',
    component: Cmp1Component,
  },
  {
    path: 'page2',
    component: Cmp2Component,
  },
  {
    path: 'page3',
    component: Cmp3Component,
  },
  {
    path: '',
    redirectTo: 'page1',
    pathMatch: 'full',
  }
];



@NgModule({
  declarations: [
    AppComponent,
    Cmp1Component,
    Cmp2Component,
    Cmp3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
