import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test', 'This is a test', 'https://www.flightclub.com/media/catalog/product/2/0/201519_1.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
