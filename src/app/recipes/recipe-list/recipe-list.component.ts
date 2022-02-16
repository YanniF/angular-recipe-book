import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Creamed Corn', 'This is a recipe for Creamed Corn', 'https://bellyfull.net/wp-content/uploads/2021/11/Creamed-Corn-blog-2.jpg'),
    new Recipe('Creamed Corn 2', 'This is a recipe for Creamed Corn 2', 'https://bellyfull.net/wp-content/uploads/2021/11/Creamed-Corn-blog-2.jpg'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
