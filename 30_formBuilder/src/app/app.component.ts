import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
   
@Component({
    selector: 'my-app',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
        .main-div {
            width: 250px;
            margin: 15px;
            padding: 15px;
        }
        .btn {margin: 15px;
              margin-left: 0px;  
        }
    `],
    template: `<form [formGroup]="myForm" class="main-div" novalidate (ngSubmit)="submit()">
                    <div class="form-group">
                        <label>Имя</label>
                        <input class="form-control" name="name" formControlName="userName" />
                          
                        <div class="alert alert-danger"
                            *ngIf="myForm.controls['userName'].invalid && myForm.controls['userName'].touched">
                            Не указано имя
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input class="form-control" name="email" formControlName="userEmail" />
                          
                        <div class="alert alert-danger"
                            *ngIf="myForm.controls['userEmail'].invalid && myForm.controls['userEmail'].touched">
                            Некорректный email
                        </div>
                    </div>
                    <div formArrayName="phones">
                        <div class="form-group" *ngFor="let phone of myForm.controls['phones'].controls; let i = index">
                            <label>Телефон</label>
                            <input class="form-control" formControlName="{{i}}" />
                        </div>
                    </div>
                    <div class="form-group">
                    <button class="btn btn-primary" (click)="addPhone()">
                            Добавить телефон
                        </button>
                        <button class="btn btn-primary" [disabled]="myForm.invalid">
                            Отправить
                        </button>
                    </div>
                </form>`
})
export class AppComponent { 
  
    myForm : FormGroup;
    constructor(private formBuilder: FormBuilder){
     
        this.myForm = formBuilder.group({
             
            "userName": ["Tom", [Validators.required]],
            "userEmail": ["", [ Validators.required, Validators.email]],
            "phones": formBuilder.array([
                ["+375", Validators.required]
            ])
        });
    }
    addPhone(){
        (<FormArray>this.myForm.controls["phones"]).push(new FormControl("+375", Validators.required));
    }
    submit(){
        console.log(this.myForm);
    }
}