import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { JsonPipe } from '@angular/common';
       
@Component({
    selector: 'child-comp',
    template: `<p>HELLO {{name}}</p>`
    
})
export class ChildComponent implements OnInit, OnChanges { 
     
    @Input() name: string;

    constructor() { this.log('constructor'); }

    ngOnInit() {this.log("onInit");}

    ngOnChanges(changes: SimpleChanges) {
        for(let propName in changes) {
            let chng = changes[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }
    private log(msg: string){
        console.log(msg);
    }
    
}