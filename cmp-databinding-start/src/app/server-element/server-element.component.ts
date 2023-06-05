import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
	encapsulation: ViewEncapsulation.None //CSS applied globally
})
export class ServerElementComponent implements OnInit, OnChanges {
	@Input('srvElement') element: { //With Input any parent component can access this property
		type: string,
		name: string,
		content: string
	};
  constructor() { 
		console.log('constructor called');
	}

	ngOnChanges(changes: SimpleChanges){
		console.log('ngOnChanges called');
		console.log(changes);
	}

  ngOnInit(): void {
		console.log('ngOnInit called');
  }

}
