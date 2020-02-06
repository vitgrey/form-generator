import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { MatDialog } from '@angular/material/dialog';
import { ChangeFormComponent } from './change-form/change-form.component';
import { FormModel } from '../../models/form.model';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.scss']
})
export class ShowFormComponent {
  public forms: Array<FormModel>;

  constructor(public formService: FormService, public dialog: MatDialog) {
    this.forms = formService.getForm();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(ChangeFormComponent, {
      width: '30vw',
      data: {
        type: 'text',
        placeholder: 'description',
        value: 'value',
        data: [
          { name: 'field', value: 'value' },
          { name: 'field', value: 'value' }
        ]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // return result ? this.formService.addForm(result): null
      if (!result) {
        return;
      }
      if (result) {
        this.formService.addForm(result);
      }
    });
  }
}
