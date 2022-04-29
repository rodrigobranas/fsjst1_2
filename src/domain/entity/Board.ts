import Card from "./Card";
import Column from "./Column";

export default class Board {
	columns: Column[];

	constructor (public idBoard: number, readonly name: string) {
		this.columns = [];
	}

	addColumn (name: string, hasEstimative: boolean) {
		this.columns.push(new Column(name, hasEstimative));
	}

	getColumn (name: string) {
		const column = this.columns.find(column => column.name === name);
		if (!column) throw new Error("Column does not exist");
		return column;
	}

	addCard (columnName: string, cardTitle: string, estimative: number, date: Date = new Date()) {
		const column = this.getColumn(columnName);
		column.addCard(new Card(cardTitle, estimative), date);
	}

	changeColumn (cardTitle: string, columnNameFrom: string, columnNameTo: string, date: Date = new Date()) {
		const card = this.getColumn(columnNameFrom).getCard(cardTitle);
		this.getColumn(columnNameTo).addCard(card, date);
		this.getColumn(columnNameFrom).removeCard(card);
	}
}
