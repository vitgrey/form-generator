import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormModel } from '../../../models/form.model';
import DialogForm from '../../../forms/dialog.form';

@Component({
  selector: 'app-change-form',
  templateUrl: './change-form.component.html',
  styleUrls: ['./change-form.component.scss']
})
export class ChangeFormComponent {
  public form: DialogForm;

  constructor(
    public dialogRef: MatDialogRef<ChangeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FormModel
  ) {
    this.form = new DialogForm(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
