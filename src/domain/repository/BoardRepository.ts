import Board from "../entity/Board";

export default interface BoardRepository {
	save (board: Board): Promise<number>;
	get (idBoard: number): Promise<Board | undefined>;
	update (board: Board): Promise<void>;
	delete (idBoard: number): Promise<void>;
	listAll (): Promise<Board[]>;
}
