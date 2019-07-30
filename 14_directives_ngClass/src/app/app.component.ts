import { Component} from '@angular/core';
        
@Component({
    selector: 'my-app',
    template: `<div [ngClass]="currentClasses">
                    <h1>Hello Angular 8</h1>
                    <p>
                        Angular 8 представляет модульную архитектуру приложения
                    </p>
                </div>`,
    styles: [
        `.verdanaFont{font-size:13px; font-family:Verdana;}
        .navyColor{color:navy;}`
    ]
})
export class AppComponent { 
     
    isVerdana = true;
    isNavy = true;
 
    currentClasses={
        verdanaFont: this.isVerdana,
        navyColor: this.isNavy
    }
}