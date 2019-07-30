import { Component} from '@angular/core';
 
@Component({
    selector: 'my-app',
    template: `<div>
                  <p [bold]="'28px'" [defaultSize]="'14px'">Hello Angular 2</p>
                  <p>Angular 2 представляет модульную архитектуру приложения</p>
               </div>`
})
export class AppComponent {}