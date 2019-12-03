import { Component, OnInit } from '@angular/core';
import { ChatBoxService } from 'src/app/shared/chat-box.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
  sendmsgfromAToB: any[] = [];
  receivemsgfromB: any[] = [];
  constructor(private sharedService: ChatBoxService) { }

  ngOnInit() {
    this.sharedService.receive().subscribe((message) => {
      if (message) {
        console.log('sender' + message );
        this.receivemsgfromB.push( message);
      }
    });
  }
  sendmsg() {
    console.log('sendmsg from sender' + this.sendmsgfromAToB);
    this.sharedService.send('FebA:' + this.sendmsgfromAToB);
  }

}
