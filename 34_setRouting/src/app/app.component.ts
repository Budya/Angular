// import { Component} from '@angular/core';
  
// @Component({
//     selector: 'my-app',
//     styles:[` 
//         .active {color:red;}
//     `],
//     template: `<div>
//                     <nav>
//                         <a routerLink="" routerLinkActive="active" 
//                         [routerLinkActiveOptions]="{exact:true}">Главная</a>
//                         <a routerLink="/about" routerLinkActive="active">О сайте</a>
//                     </nav>
//                     <h1>Маршрутизация в Angular 6</h1>
//                     <router-outlet></router-outlet>
//                </div>`
// })
// export class AppComponent {}

import { Component} from '@angular/core';
 
@Component({
    selector: 'my-app',
    styles:[` 
        .nav{ clear: both;}
        a {float: left;}
        .active a { color: red;}
    `],
    template: `<div>
                    <ul class="nav">
                        <li routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
                            <a routerLink="">Главная</a>
                        </li>
                        <li routerLinkActive="active">
                            <a routerLink="/about">О сайте</a>
                        </li>
                    </ul>
                    <router-outlet></router-outlet>
               </div>`
})
export class AppComponent { }