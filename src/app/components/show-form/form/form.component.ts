import { Component } from '@angular/core';
import { FormService } from './../../../services/form.service';
import { Input } from '@angular/core';
import { ChangeFormComponent } from '../change-form/change-form.component';
import { MatDialog } from '@angular/material/dialog';
import { FormModel } from '../../../models/form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() form: FormModel;
  @Input() index: number;

  constructor(private formService: FormService, public dialog: MatDialog) {}

  public deleteForm(index): void {
    this.formService.deleteForm(index);
  }

  public openDialog(): void {
    // check JSON.parse(JSON.stringify( ??
    const dialogRef = this.dialog.open(ChangeFormComponent, {
      width: '30vw',
      data: JSON.parse(
        JSON.stringify(this.formService.getCurrentForm(this.index))
      )
    });

    dialogRef.afterClosed().subscribe(result => {
      // return result ? this.formService.updateCurrentForm(result, this.index) : null
      if (!result) {
        return;
      }
      if (result) {
        this.formService.updateCurrentForm(result, this.index);
      }
    });
  }
}
