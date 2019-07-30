import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { BoldDirective } from './bold.directive';
import { Bold2Directive } from './bold2.directive';
import { HostDirective } from './host-dir.directive';

   
@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent, BoldDirective, Bold2Directive,
                    HostDirective],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }