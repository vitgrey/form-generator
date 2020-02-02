import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowFormComponent } from './components/show-form/show-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatCardModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatSliderModule,
  MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';

import { ChangeFormComponent } from './components/show-form/change-form/change-form.component';
import { FormComponent } from './components/show-form/form/form.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowFormComponent,
    FormComponent,
    ChangeFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  entryComponents: [ChangeFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
