import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassEventBindingComponent } from '../class-event-binding/class-event-binding.component';
import { AttributeStructuralDirectivesComponent } from './attribute-structural-directives/attribute-structural-directives.component';

@NgModule({
   declarations: [
      AppComponent,
      ClassEventBindingComponent,
      AttributeStructuralDirectivesComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
