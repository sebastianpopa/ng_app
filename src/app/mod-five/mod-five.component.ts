import { Component } from '@angular/core';

@Component({
  selector: 'app-mod-five',
  templateUrl: './mod-five.component.html',
  styleUrls: ['./mod-five.component.css']
})
export class ModFiveComponent {
  serverElements = [];
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }
}
