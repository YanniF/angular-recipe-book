import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

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
    this.ingredientsChanged.next([...this.ingredients])
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next([...this.ingredients])
  }
}
