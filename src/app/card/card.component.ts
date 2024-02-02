import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  // title = 'card';
  // isVisible = true;
  item = '';
  list: string[] = [];
  // // setTitle(e: any) {
  // //   this.title = e.target.value;
  // // }

  // toggleVisibility() {
  //   this.isVisible = !this.isVisible;
  //   return this.isVisible;
  // }
  addToList() {
    if (!this.item) return;
    this.list.push(this.item);
    this.item = '';
  }
  removeFromList(i: number) {
    this.list.splice(i, 1);
  }
}
