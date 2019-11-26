import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-event-binding',
  templateUrl: './class-event-binding.component.html',
  styleUrls: ['./class-event-binding.component.css']
})
export class ClassEventBindingComponent implements OnInit {

  color  = 'green';
  isToggled: boolean;
  constructor() { }

  ngOnInit() {
    this.isToggled = true;
    this.color = 'green';
  }

 /*  togglecolor(e) {
    console.log('target:' + e.target);
    console.log('target textContext:' + e.target.textContent);
  } */

  submitcolor() {
    this.color = 'red';
    this.isToggled = !this.isToggled;
  }

}
