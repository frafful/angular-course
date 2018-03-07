import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.module';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe(
                'A Test Recipe', 
                'This is a test',
                'https://images.unsplash.com/photo-1505334545366-6362e0c27a9e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b80d280b041eae0c88d97fbd851f44fc&auto=format&fit=crop&w=334&q=80',
                [new Ingredient('Apples', 7), new Ingredient('Oranges', 3)]
              )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
