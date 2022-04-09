import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RecipesService} from "../recipes/recipes.service";
import {Recipe} from "../recipes/recipe.model";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  baseUrl = 'https://yanni-ng-complete-guide-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'

  constructor(private http: HttpClient, private recipesService: RecipesService) { }

  storeRecipes() {
    const recipes = this.recipesService.getRecipes()

    this.http.put(this.baseUrl, recipes).subscribe(resp => {
      console.log(resp)
    })
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(this.baseUrl)
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients || [] }
        })
      }),
      tap(recipes => {
        this.recipesService.setRecipes(recipes)
      })
    )
  }
}
