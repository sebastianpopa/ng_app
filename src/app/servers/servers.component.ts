import { Component } from '@angular/core';

@Component({
  selector: 'servers-root',
  templateUrl: './servers.component.html',
})
export class ServersComponent {
  allowNewServer = false;

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    },5000)
  }
}
