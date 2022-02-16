import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() onAddedIngredient = new EventEmitter<Ingredient>()
  name: string = '';
  amount: number | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    this.onAddedIngredient.emit(new Ingredient(this.name, this.amount));
  }

  onClearForm() {
    this.name = '';
    this.amount = undefined;
  }
}
