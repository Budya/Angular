import { Component} from '@angular/core';
 
@Component({
    selector: 'my-app',
    template: `<p *ngIf="condition">
                  Привет мир
                </p>
                <p *ngIf="!condition">
                  Пока мир
                </p>
                <button (click)="toggle()">Toggle</button>
                
                <ul>
                <p *ngFor="let item of items; let i = index">{{i+1}}.{{item}}</p>
                </ul>`
})
export class AppComponent {
     
    condition: boolean=true;

    items =["Apple iPhone 7", "Huawei Mate 9", "Samsung Galaxy S7", "Motorola Moto Z"];
     
    toggle(){
        this.condition=!this.condition;
    }
}