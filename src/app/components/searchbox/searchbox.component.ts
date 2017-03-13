import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'searchbox',
	templateUrl: 'searchbox.component.html',
	styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent {
	public searchText: string;

	constructor() {
		this.searchText = '';
	}

	handleSearch() {
	    console.log('find', this.searchText);
  	}
}
