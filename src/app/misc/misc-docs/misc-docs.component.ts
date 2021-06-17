import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInOutAnimation } from '../animations/fade-in-out-animation';
import { IFormDirty } from '../guards/form-dirty/form-dirty.interface';

@Component({
  selector: 'misc-docs',
  templateUrl: './misc-docs.component.html',
  styleUrls: ['./misc-docs.component.scss'],
  animations: [fadeInOutAnimation]
})
export class MiscDocsComponent implements IFormDirty {

  public form: FormGroup;
  public isInDOM = true;

  constructor(private fb: FormBuilder){
    this.initializeForm();
  }
  public submit() {
    this.form.reset(this.form.value);
  }

  private initializeForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

}
