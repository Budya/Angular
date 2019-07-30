import { Component} from '@angular/core';
       
@Component({
    selector: 'my-app',
    // <div [class.invisible]="visibility">
    // <div [style.display]="visibility==true?'block':'none'">
    template: `<div [ngClass]="{invisible: visibility}">
                    <h1>Hello Angular 8</h1>
                    <p>
                        Angular 8 представляет модульную архитектуру приложения
                    </p>
                </div>
                <button (click)="toggle()">Toggle</button>`,
    styles: [ `.invisible{display:none;}`]
})
export class AppComponent { 
     
    visibility: boolean = true;
    // переключаем переменную
    toggle(){
        this.visibility=!this.visibility;
    }
}