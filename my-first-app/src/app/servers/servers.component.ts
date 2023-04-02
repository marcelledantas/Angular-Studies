import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
	// selector: '.app-servers',
	selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
	.online{
		color: white;
	}`
	]
})
export class ServersComponent {
	allowNewServer = false;
	serverCreationStatus = 'No server was created!';
	serverName = 'Testserver';
	userName = '';
	isEmpty = false;
	serverCreated = false;
	serverStatus = 'offline';
	serverId = '10';
	servers = ['Testserver','Testserver 2'];

	constructor(){
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000)

		this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

	}

	onCreateServer(){
		this.serverCreated = true;
		this.servers.push(this.serverName);
		this.serverCreationStatus = 'Server was created! Name as' + this.serverName;
	}


	getServerStatus(){
		return this.serverStatus;
	}

	getColor(){
		return this.serverStatus === 'online' ? 'green': 'red';
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
