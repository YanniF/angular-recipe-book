import {Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Das ist ein Schnitzel, ja',
      'https://www.gutekueche.at/storage/media/recipe/106126/resp/wiener-schnitzel___webp_940_705.webp',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Fries', 22)
      ]
    ),
    new Recipe(
      'Creamed Corn',
      'This is a recipe for Creamed Corn',
      'https://bellyfull.net/wp-content/uploads/2021/11/Creamed-Corn-blog-2.jpg',
      [
        new Ingredient('Corn', 2),
        new Ingredient('Cream', 1)
      ]
    ),
  ]

  constructor() { }

  getRecipes() {
    return [ ...this.recipes ];
  }

  getRecipe(index: number) {
    return { ...this.recipes[index] }
  }
}
