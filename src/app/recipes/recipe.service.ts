import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe("A Test Recipe", "This is the description", "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg", [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
        new Recipe("Test", "description", "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg", [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]),    
    ];
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}