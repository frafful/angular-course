import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://images.unsplash.com/photo-1505334545366-6362e0c27a9e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b80d280b041eae0c88d97fbd851f44fc&auto=format&fit=crop&w=334&q=80')
  ];

  constructor() { }

  ngOnInit() {
  }

}
