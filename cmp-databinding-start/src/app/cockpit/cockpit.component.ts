import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
	@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>; //Output: passing data out of the component (m ake listinable from outside)
	@Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>;
	newServerName = '';
  newServerContent = '';

	constructor() { }

  ngOnInit(): void {
  }

	onAddServer() {
		this.serverCreated.emit({
			serverName: this.newServerName, 
			serverContent: this.newServerContent});
  }

  onAddBlueprint() {
		this.bluePrintCreated.emit({
			serverName: this.newServerName,
			serverContent: this.newServerContent
		})
  }

}

//Output allow parent component use this component to listen to events created with EventEmitter