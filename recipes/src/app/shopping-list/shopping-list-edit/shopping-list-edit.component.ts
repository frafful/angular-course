import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() onIngredientAdded = new EventEmitter<{ name, amount }>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredientClick() {
    this.shoppingListService.addIngredient({ name: this.nameInputRef.nativeElement.value, amount: this.amountInputRef.nativeElement.value });
    //this.onIngredientAdded.emit({ name: this.nameInputRef.nativeElement.value, amount: this.amountInputRef.nativeElement.value });
  }

}
