import { Component} from '@angular/core';
  
@Component({
    selector: 'my-app',
    template: `<div>
                    <nav>
                        <a routerLink="">Главная</a>
                        <a routerLink="/about">О сайте</a>
                        <a [routerLink]="['item', '5']"
                            [queryParams]="{'product':'phone', 'price': 200}">item 5</a>
                        <a [routerLink]="['item', '8']"
                            [queryParams]="{'product':'tablet'}">item 8</a>
                    </nav>
                    <router-outlet></router-outlet>
               </div>`
})
export class AppComponent {}