import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { InputControls } from './input-control';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent {
 
  private formGroup: FormGroup;
 
  controls: InputControls = {
    poc: {
      name: 'poc',
      controls: [
        {
          name: 'aOrB',
          type: 'inputtext',
          label: 'Enter a or b'
        },
        {
          name: 'randomtext',
          type: 'randomtext',
          label: "I'm not always shown!"
        }
      ]
    }
  };
 
  constructor(private fb: FormBuilder) { }
 
  ngOnInit() {
    this.formGroup =
      this.fb.group({
        poc: this.fb.group({
          aOrB: [null]
        })
      });
 
    this.formGroup.valueChanges.pipe(
      //debounceTime(1),
      distinctUntilChanged()
    ).subscribe(val => {
 
      const str: string = val.poc.aOrB;
 
      const pocFg: FormGroup = this.formGroup.get('poc') as FormGroup;
      if (str && str.endsWith('a')) {
        if (!pocFg.get('randomtext')) {
          pocFg.addControl('randomtext', new FormControl(null, []));
        }
      } else if (str && str.endsWith('b')) {
          if (pocFg.contains('randomtext')) {
            pocFg.removeControl('randomtext');
          }
        }
    });
  }
}