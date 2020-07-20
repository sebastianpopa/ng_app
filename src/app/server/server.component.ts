import { Component } from '@angular/core';

@Component({
    selector: 'server-root',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 0;
    serverStatus = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus == 'online' ? 'green' : 'red';
    }
}