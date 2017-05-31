import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToContractorComponent } from './to-contractor/to-contractor.component';
import { ToEmployeeComponent } from './to-employee/to-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ToContractorComponent,
    ToEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
