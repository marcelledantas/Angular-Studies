import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})

export class AppComponent {
	showDetails = false;
	logClicks = [];
	counterClicks = 0;

	setDetails(){
		this.showDetails = this.showDetails === true ? false : true;
		// this.logClicks.push(this.logClicks.length + 1);
		this.logClicks.push(new Date());

	}

	getColor(){
		return 'blue';
	}

	getValidLength(){
		return this.logClicks.length >= 5;
	}

}
