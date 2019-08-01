import { Component} from '@angular/core';
import { NgForm} from '@angular/forms';
 
@Component({
    selector: 'my-app',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
        .main-div {width: 300px;
                  margin: 25px;
                  padding: 25px;
                 }
    `],
    template: `<div class="main-div">
                <form #myForm="ngForm" novalidate (ngSubmit)="onSubmit(myForm)">
                    <div class="form-group">
                        <label>Имя</label>
                        <input class="form-control" name="name" [(ngModel)]="name" required />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input class="form-control" name="email" ngModel 
                            required email />
                    </div>
                    <div class="form-group">
                        <label>Телефон</label>
                        <input class="form-control" name="phone" ngModel 
                            required pattern="[0-9]{10}" />
                    </div>
                    <div class="form-group">
                        <button [disabled]="myForm.invalid"
                                class="btn btn-primary" (click)="submit(myForm)">Добавить</button>
                    </div>
                    <div class="form-group">
                        <input type="submit" [disabled]="myForm.invalid" class="btn btn-primary" value="Отправить" />
                    </div>
                </form>
                </div>
                <div>Имя: {{myForm.value.name}}</div>
                <div>Email: {{myForm.value.email}}</div>`
})
export class AppComponent { 
 
    submit(form: NgForm){
        console.log(form);
    }

    onSubmit(form: NgForm){
        console.log(form);
    }
}