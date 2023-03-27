import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { ViewemployeedetailsComponent } from './viewemployeedetails/viewemployeedetails.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routeConfig: Routes = [
  { path:'', redirectTo: 'listEmployee', pathMatch:'full' },
  { path:'addEmployee', component: AddemployeeComponent },
  { path:'listEmployee', component: ListemployeeComponent },
  { path:'viewEmployee/:id', component:ViewemployeedetailsComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    ListemployeeComponent,
    ViewemployeedetailsComponent,
    HeaderComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
