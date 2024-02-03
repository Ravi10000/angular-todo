import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

type listItem = {
  name: string;
  createdAt: Date;
  isFinished: boolean;
};
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  // title = 'card';
  // isVisible = true;
  item = '';
  storage = localStorage.getItem('taskList');
  list =
    this.storage !== null
      ? JSON.parse(this.storage)
      : [
          // {
          //   name: 'Your tasks will apear here.',
          //   createdAt: new Date(),
          //   isFinished: false,
          // },
        ];

  constructor() {
    console.log({ list: this.list });
  }
  ngOnInit(): void {}
  // // setTitle(e: any) {
  // //   this.title = e.target.value;
  // // }

  // toggleVisibility() {
  //   this.isVisible = !this.isVisible;
  //   return this.isVisible;
  // }
  addToList(inputBox: any) {
    if (!this.item) return;
    const newTask = {
      name: this.item,
      createdAt: new Date(),
      isFinished: false,
    };
    this.list.push(newTask);
    localStorage.setItem('taskList', JSON.stringify(this.list));
    this.item = '';
    inputBox.focus();
  }
  removeFromList(i: number) {
    this.list.splice(i, 1);
    localStorage.setItem('taskList', JSON.stringify(this.list));
  }
  updateList() {
    console.log({ list: this.list });
    localStorage.setItem('taskList', JSON.stringify(this.list));
  }
}
