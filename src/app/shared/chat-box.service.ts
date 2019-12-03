import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatBoxService {
subject: Subject<any> = new Subject<any>();
  constructor() { }

send(messages: any) {
  this.subject.next(messages);
}

receive() {
  return this.subject.asObservable();
}
}
