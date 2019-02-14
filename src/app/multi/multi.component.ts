import { Component,  Input, ChangeDetectionStrategy, Self, Optional } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { InputControl } from '../input-control';
 
@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiComponent  {
  @Input() control: InputControl;
 
  constructor(
    @Optional()
    @Self()
    public container: ControlContainer
  ) {
  }
 
}