import {Component} from '@angular/core';

@Component({
  selector: 'Simple2',
  template: `
    <div>
      <Simple1 value="value 1" class="left"></Simple1>
      <Simple1 value="value 2" class="right"></Simple1>
    </div>`,
  styleUrls: ['./style.scss'],
})
export class Simple2 {
}
