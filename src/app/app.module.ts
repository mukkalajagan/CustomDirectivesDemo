import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipDirective } from './tooltip.directive';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
