import { Injectable } from '@angular/core';
import { FormModel } from 'src/app/models/form.model';
import { DefaultConfig } from './default.config';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  public model: FormModel[];

  constructor() {
    if (localStorage.getItem('form')) {
      this.model = JSON.parse(localStorage.getItem('form'));
    } else {
      this.model = DefaultConfig;
      localStorage.setItem('form', JSON.stringify(this.model));
    }
  }

  public getForm(): FormModel[] {
    return this.model;
  }

  public getCurrentForm(index: number): FormModel {
    return this.model[index];
  }

  public updateCurrentForm(article: FormModel, index: number): void {
    this.model[index] = article;
    localStorage.setItem('form', JSON.stringify(this.model));
  }

  public addForm(article: FormModel): void {
    this.model.unshift(article);
    localStorage.setItem('form', JSON.stringify(this.model));
  }
  public deleteForm(index: number): void {
    this.model.splice(index, 1);
    localStorage.setItem('form', JSON.stringify(this.model));
  }
}
