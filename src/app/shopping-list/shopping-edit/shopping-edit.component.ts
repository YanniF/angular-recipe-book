import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  name: string = '';
  amount: number | undefined = undefined;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    this.slService.addIngredient(new Ingredient(this.name, this.amount));
  }

  onClearForm() {
    this.name = '';
    this.amount = undefined;
  }
}
