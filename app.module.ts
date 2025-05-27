import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EntidadCreateComponent } from './components/entidad-create/entidad-create.component';
import { EntidadListComponent } from './components/entidad-list/entidad-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EntidadCreateComponent,
    EntidadListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
