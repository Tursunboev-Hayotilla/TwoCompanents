// test.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <button (click)="changeData()">Change Data</button>
  `
})
export class FirstComponent {
  @Input() data: string = '';
  @Output() dataChanged: EventEmitter<string> = new EventEmitter<string>();

  changeData() {
    this.data = 'Assalomu Alaykum';
    this.dataChanged.emit(this.data);
  }
}
