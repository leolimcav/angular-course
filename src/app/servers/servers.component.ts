import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //styleUrls: ['./servers.component.css']
  styles: [`
      .log {
        color: white;
      }
    `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = "No server was created!";
  serverName = "";

  displayDetails = false;
  applyStyle = false;
  clicks = [];

  username = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;

    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    return this.serverCreated = `Server ${this.serverName} created`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  isUsernameEmpty() {
    return this.username.length === 0;
  }

  clearUsername() {
    this.username = "";
  }

  displayToggle() {
    this.displayDetails = !this.displayDetails;

    if(this.displayDetails) {
      this.clicks.push(`Clicked at ${Date.now()}`);

      if(this.clicks.length > 5) {
        this.applyStyle = true;
      }
    }
  }
}
