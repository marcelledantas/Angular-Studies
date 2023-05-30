import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
	@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>; //Output: passing data out of the component (make listinable from outside)
	@Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>;
	// newServerName = '';
  // newServerContent = '';
	@ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

	constructor() { }

  ngOnInit(): void {
  }

	onAddServer(nameInput: HTMLInputElement) {
		console.log(this.serverContentInput);
		this.serverCreated.emit({
			serverName: nameInput.value,
			serverContent: this.serverContentInput.nativeElement.value
		});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
		this.bluePrintCreated.emit({
			serverName: nameInput.value,
			serverContent: this.serverContentInput.nativeElement.value
		})
  }

}

//Output allow parent component use this component to listen to events created with EventEmitter