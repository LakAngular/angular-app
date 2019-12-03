import { Component, OnInit } from '@angular/core';
import { ChatBoxService } from 'src/app/shared/chat-box.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
sendmsgfromBToA: any[] = [];
receivemsgfromA: any[] = [];

  constructor(private sharedService: ChatBoxService) { }

  ngOnInit() {
    this.sharedService.receive().subscribe((message) => {
      console.log('receiver reveie from person A: ' + message);
      if (message) {
        this.receivemsgfromA.push( message);
      }
    });
  }
  receivemsg() {
    console.log('receiver reveie: ' + this.sendmsgfromBToA);
    this.sharedService.send('Jan:' + this.sendmsgfromBToA);
  }

}
