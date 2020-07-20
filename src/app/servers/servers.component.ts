import { Component } from '@angular/core';

@Component({
  selector: 'servers-root',
  templateUrl: './servers.component.html',
})
export class ServersComponent {
  allowNewServer = false;
  serverCreatedStatus = "No server has been created";
  serverCreated = false;
  serverName = '';
  servers = [];

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    },5000)
  }

  onServerCreation(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreatedStatus = "A server was created !!!";
  }
  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}
