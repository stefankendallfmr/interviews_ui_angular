import {Component, Input} from '@angular/core';
import placeholderSrc from '../static/images/placeholder.png';

@Component({
  selector: 'Simple1',
  template: `
    <div class="class1">1</div>
    <div class="class2">2</div>
    <div>{{value}}</div>
    <img src={{placeholderSrc}}/>
  `,
  styleUrls: ['./style.scss'],
})
export class Simple1 {
  private placeholderSrc: string = placeholderSrc;

  @Input()
  value: string;
}
