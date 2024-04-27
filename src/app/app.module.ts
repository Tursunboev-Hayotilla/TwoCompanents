import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './companents/first/first.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './companents/test/test.component';

@NgModule({
  declarations: [
   AppComponent,
   FirstComponent,
   TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
