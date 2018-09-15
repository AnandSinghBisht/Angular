import {Ingredient}from '../shared/Ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService
{
    ingredientsChanged=new EventEmitter<Ingredient[]>();
  private  ingredients: Ingredient[]=[
        new Ingredient('Apple',2),
        new Ingredient('Orange',2)
      ];

      getIngredient()
      {
          return this.ingredients.slice();
      }
      addIngredient(ingredient :Ingredient)
      {
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }
}