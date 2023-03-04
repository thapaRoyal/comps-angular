import { ElementsModule } from './elements/elements.module';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ElementsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
