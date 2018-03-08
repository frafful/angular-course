import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() onIngredientAdded = new EventEmitter<{ name, amount }>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  onAddIngredientClick() {
    this.onIngredientAdded.emit({ name: this.nameInputRef.nativeElement.value, amount: this.amountInputRef.nativeElement.value });
  }

}
