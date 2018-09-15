import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService
{
   repicesSelected= new EventEmitter<Recipe>();
   private recipes: Recipe[]=[
        new Recipe('Chole Kulche','dsf','https://images.pexels.com/photos/1251097/pexels-photo-1251097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
        new Recipe('Dal mkhni','kya','https://images.pexels.com/photos/1251097/pexels-photo-1251097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
        
      ];

      getRecipes()
      {
          return this.recipes.slice();
      }
}
