import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
	ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatos', 2)
	];

	constructor(){}

	ngOnInit() {}
}
