import BoardRepository from "../domain/repository/BoardRepository"

export default class GetBoard {

	constructor (readonly boardRepository: BoardRepository) {
	}

	async execute (idBoard: number): Promise<Output> {
		const board = await this.boardRepository.get(idBoard);
		if (!board) throw new Error("Board not found");
		const output: Output = {
			idBoard: board.idBoard,
			cards: []
		};
		for (const column of board.columns) {
			for (const card of column.cards) {
				output.cards.push({ title: card.title, estimative: card.estimative });
			}
		}
		return output;
	}
}

type Output = {
	idBoard: number,
	cards: { title: string, estimative: number }[]
}
