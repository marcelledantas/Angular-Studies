import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
	// selector: '.app-servers',
	selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
	allowNewServer = false;
	serverCreationStatus = 'No server was created!';
	serverName = 'Testserver';
	userName = '';
	isEmpty = false;

	constructor(){
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000)

	}

	onCreateServer(){
		this.serverCreationStatus = 'Server was created! Name as' + this.serverName;
	}

	onUpdateServerName(event: any){
		this.serverName = event.target.value;
	}

	checkUserName(){
		if(this.userName){
			this.isEmpty = true;
		}

		return this.isEmpty;
	}

	resetUserName(){
		this.userName = '';
	}

	ngOnInit() {}
}
