import { Component, OnChanges, OnInit,
  // DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnChanges, OnInit,
// DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'angular-app';
  constructor() {
    console.log('Constructor called when component instantiated');
  }
  ngOnChanges() {
      console.log('ngOnChanges called upone every change detected from view. Its called before ngOnInit initiated');
  }
  ngOnInit() {
      console.log('ngOnInit called once when initializating the component');
  }
    /* ngDoCheck() {
      console.log('Called at every change');
  }  */
  ngAfterContentInit() {
    console.log('ngAfterContentInit called after the content initialized in the component');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called after the content checked in the component / view');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called a component view initialized');
  }
ngAfterViewChecked() {
  console.log('ngAfterViewChecked called after the component view checked');
}

ngOnDestroy() {
  console.log('ngOnDestroy called when component destroyed');
}

}


