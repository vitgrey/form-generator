import { FormModel } from '../models/form.model';

export const DefaultConfig: Array<FormModel> = [
  {
    type: 'text',
    placeholder: 'Enter',
    value: 'value',
    data: [
      { name: 'summer', value: 'value' },
      { name: 'winter', value: 'value' }
    ]
  },
  {
    type: 'datePicker',
    placeholder: 'Enter',
    value: 'value',
    data: [
      { name: 'summer', value: 'value' },
      { name: 'winter', value: 'value' }
    ]
  },
  {
    type: 'select',
    placeholder: 'Enter',
    value: 'value',
    data: [
      { name: 'summer', value: 'value' },
      { name: 'winter', value: 'value' }
    ]
  },
  {
    type: 'radio',
    placeholder: 'Enter',
    value: 'value',
    data: [
      { name: 'summer', value: 'value' },
      { name: 'winter', value: 'value' }
    ]
  },
  {
    type: 'checkBox',
    placeholder: 'Enter',
    value: 'value',
    data: [
      { name: 'summer', value: 'value' },
      { name: 'winter', value: 'value' }
    ]
  }
];
