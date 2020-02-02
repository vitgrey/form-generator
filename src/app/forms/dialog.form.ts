import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormModel } from '../models/form.model';

export default class DialogForm {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: FormModel;

  constructor(model: FormModel) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  public createForm() {
    this.formGroup = this.formBuilder.group({
      type: new FormControl(this.model.type, { updateOn: 'change' }),
      placeholder: new FormControl(this.model.placeholder, { updateOn: 'change'}),
      value: new FormControl(this.model.value, { updateOn: 'change'}),
      dataNameFirst: new FormControl(this.model.data[0].name, {updateOn: 'change'}),
      dataValueFirst: new FormControl(this.model.data[0].value, {updateOn: 'change'}),
      dataNameSecond: new FormControl(this.model.data[1].name, {updateOn: 'change'}),
      dataValueSecond: new FormControl(this.model.data[1].value, {updateOn: 'change'})
    });

    this.formGroup.valueChanges.subscribe((data: any) => {
      this.model.type = data.type;
      this.model.placeholder = data.placeholder;
      this.model.value = data.value;
      this.model.data[0].name = data.dataNameFirst;
      this.model.data[0].value = data.dataValueFirst;
      this.model.data[1].name = data.dataNameSecond;
      this.model.data[1].value = data.dataValueSecond;
    });
  }
}
