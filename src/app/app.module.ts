import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassEventBindingComponent } from '../class-event-binding/class-event-binding.component';
import { AttributeStructuralDirectivesComponent } from './attribute-structural-directives/attribute-structural-directives.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { SampleComponent} from './components/sample/sample.component';
import { SenderComponent} from './components/sender/sender.component';
import { ReceiverComponent} from './components/receiver/receiver.component';
import { ChatBoxService } from './shared/chat-box.service';

@NgModule({
   declarations: [
      AppComponent,
      ClassEventBindingComponent,
      AttributeStructuralDirectivesComponent,
      ChildComponent,
      ParentComponent,
      SampleComponent,
      SenderComponent,
      ReceiverComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [
     ChatBoxService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
