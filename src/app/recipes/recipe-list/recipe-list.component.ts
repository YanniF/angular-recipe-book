import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Creamed Corn', 'This is a recipe for Creamed Corn', 'https://bellyfull.net/wp-content/uploads/2021/11/Creamed-Corn-blog-2.jpg'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
