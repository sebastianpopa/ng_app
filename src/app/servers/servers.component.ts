import { Component } from '@angular/core';

@Component({
  selector: 'servers-root',
  templateUrl: './servers.component.html',
})
export class ServersComponent {
  allowNewServer = false;
  serverCreated = "No server has been created";
  serverName = '';
  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    },5000)
  }
  onServerCreation(){
    this.serverCreated = "A server was created !!!";
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}
