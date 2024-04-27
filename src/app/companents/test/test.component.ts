// testdata.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{ test }}</h2>
    <app-first [data]="test" (dataChanged)="onDataChanged($event)"></app-first>
  `
})
export class TestComponent {
  test: string = '';

  onDataChanged(data: string) {
    this.test = data; // Update the parent component's data
  }
}
