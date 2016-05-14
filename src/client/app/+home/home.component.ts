import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';

import { NameListService } from '../shared/index';

@Component({
  selector: 'sd-home',
  templateUrl: 'app/+home/home.component.html',
  styleUrls: ['app/+home/home.component.css'],
  directives: [FORM_DIRECTIVES]
})

export class HomeComponent {

  newName: string;
  formSubmitted: boolean;

  constructor(public nameListService: NameListService) {}

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }

  movieSearch(): void {
    this.formSubmitted = true;
    // add logic
  }
}
