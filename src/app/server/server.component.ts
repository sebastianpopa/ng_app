import { Component } from '@angular/core';

@Component({
    selector: 'server-root',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 0;
    serverStatus = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}