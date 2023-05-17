import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
	
	recipes: Recipe[] = [
		new Recipe('A Test Recipe', 'This is a simple test recipe', 'https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011.jpg')
	];

	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}

}
