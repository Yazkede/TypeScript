/* eslint-disable no-underscore-dangle */
import { positiveInteger } from './decorators';
import { ReferenceItem } from './reference-item';


export default class Encyclopedia extends ReferenceItem {
	private _copies: number;

	@positiveInteger
	get copies(): number{
		return this.copies;
	}
	set copies(value: number) {
		this.copies = value;
	}


	constructor(id: number, title: string, year: number, public edition: number) {
		 super(id, title, year);
	}
	override printItem(): void {
		 super.printItem();
		 console.log(`Edition: ${this.edition} (${this.year})`);
	}

	printCitation(): void {
		 console.log(`${this.title} - ${this.year}`);
	}
}