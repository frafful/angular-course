import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() menuSelected = new EventEmitter<string>();

  onSelect(selectedMenu) {
    this.menuSelected.emit(selectedMenu);
  }
}