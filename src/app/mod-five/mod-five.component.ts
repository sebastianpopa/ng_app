import { Component } from '@angular/core';

@Component({
  selector: 'app-mod-five',
  templateUrl: './mod-five.component.html',
  styleUrls: ['./mod-five.component.css']
})
export class ModFiveComponent {
  serverElements = [{ type: 'server', name: 'TestServer', content: 'Just a test!' }];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }
}
