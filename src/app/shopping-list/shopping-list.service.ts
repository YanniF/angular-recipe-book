import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 8)
  ];

  constructor() { }

  getIngredients() {
    return [ ...this.ingredients ];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
    this.ingredientsChanged.emit([...this.ingredients])
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit([...this.ingredients])
  }
}
