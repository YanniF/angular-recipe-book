import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Params} from "@angular/router";
import {RecipesService} from "../recipes.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(private slService: ShoppingListService, private recipesService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipesService.getRecipe(+params.id);
    })
  }

  addToShoppingList (){
    this.slService.addIngredients(this.recipe.ingredients);
  }
}
