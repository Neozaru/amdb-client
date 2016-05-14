import { FORM_DIRECTIVES } from '@angular/common';
// import {MdButton} from '@angular2-material/button';
// import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
// import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

import { Component } from '@angular/core';

import { NameListService } from '../shared/index';

import { MoviesSearchService} from '../shared/movies/moviesSearch.service';

@Component({
  selector: 'sd-home',
  templateUrl: 'app/+home/home.component.html',
  styleUrls: ['app/+home/home.component.css'],
  directives: [FORM_DIRECTIVES]
})

export class HomeComponent {

  moviesResult: any[] = [];
  formSubmitted: boolean;

  constructor(public nameListService: NameListService, private moviesSearchService: MoviesSearchService) {}

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }

  movieSearch(keyword: string): void {
    this.formSubmitted = true;
    console.warn("Searching terms : ", keyword)
    this.moviesResult = this.moviesSearchService.search(keyword);
  }
}
