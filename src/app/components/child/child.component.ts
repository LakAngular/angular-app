import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
name = 'Initial Value';
@Input() titlemsg: string;
// Event Emitter create instance with class EventEmitter 
@Output() send: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log('simplechanges');
    console.log(changes.titlemsg);
  }
  // Send data from child to parent using EventEmitter with emit methos
  sendOutput() {
    this.send.emit(this.name);
    console.log('atc chile Com:' + this.send.emit(this.name));
  }
}
