import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipesService} from "../recipes.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private slService: ShoppingListService,
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id
      this.recipe = this.recipesService.getRecipe(this.id)
    })
  }

  addToShoppingList (){
    this.slService.addIngredients(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    this.recipesService.deleteRecipe(this.id)
    this.router.navigate(['/recipes'])
  }
}
